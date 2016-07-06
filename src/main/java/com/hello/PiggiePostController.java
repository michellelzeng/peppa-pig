package com.hello;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpMethod;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.security.MessageDigest;

@RestController
public class PiggiePostController {

    static final String HOME = "/Users/mzeng/piggie-home/";
    static final String TEMP_FOLER = HOME + "temp/";
    static final String PHOTO_FOLER = HOME + "photo/";
    private PiggiePostRepository piggiePostRepository;

    @Autowired
    public PiggiePostController(PiggiePostRepository piggiePostRepository) {
        this.piggiePostRepository = piggiePostRepository;
    }

    @RequestMapping("/getAllPiggiePosts")
    public Iterable<PiggiePost> getAllPiggiePosts() {
        Iterable<PiggiePost> posts = piggiePostRepository.findAll(new Sort(new Sort.Order(Sort.Direction.DESC, "id")));
        return posts;
    }

    @RequestMapping(path = "/savePiggiePost", method=RequestMethod.POST)
    public void savePost(@RequestBody PiggiePost piggiePost) {
        piggiePostRepository.save(piggiePost);

        File folder = new File(TEMP_FOLER);
        for(File file :folder.listFiles() ) {
            boolean result = file.renameTo(new File(PHOTO_FOLER + file.getName()));
        }
    }

    @RequestMapping(method = RequestMethod.POST, path = "/uploadFile")
    public String handleFileUpload(@RequestParam(name = "upload_file") MultipartFile file) {
        if (!file.isEmpty()) {
            try {
                String hash = hash(file.getInputStream());
                Files.copy(file.getInputStream(), Paths.get(TEMP_FOLER, hash),
                        StandardCopyOption.REPLACE_EXISTING);
                System.out.println("file uploaded");
                return hash;
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        } else {
            throw new RuntimeException("file is empty");
        }
    }

    @RequestMapping(path="/photo" , produces = "image/jpg")
    public byte[] getImage(@RequestParam(value="hash") String fileHash) throws IOException {
        return Files.readAllBytes(Paths.get(PHOTO_FOLER + fileHash));
    }

    private String hash(InputStream inputStream) throws Exception{
        MessageDigest md = MessageDigest.getInstance("SHA-256");

        byte[] dataBytes = new byte[1024];
        int nread = 0;
        while ((nread = inputStream.read(dataBytes)) != -1) {
            md.update(dataBytes, 0, nread);
        };
        byte[] mdbytes = md.digest();

        //convert the byte to hex format method 2
        StringBuffer hexString = new StringBuffer();
        for (int i=0;i<mdbytes.length;i++) {
            hexString.append(Integer.toHexString(0xFF & mdbytes[i]));
        }
        return hexString.toString();
    }
}
