package com.hello;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.security.MessageDigest;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@RestController
public class PiggiePostController {

    static final String ROOT = "/Users/michelle/piggie-home/temp";
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

    @RequestMapping(method = RequestMethod.POST, path = "/uploadFile")
    public void handleFileUpload(@RequestParam(name = "upload_file") MultipartFile file) {
        if (!file.isEmpty()) {
            try {
                Files.copy(file.getInputStream(), Paths.get(ROOT, hash(file.getInputStream())),
                        StandardCopyOption.REPLACE_EXISTING);
                System.out.println("file uploaded");
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        } else {
            System.out.println("file is empty");
        }
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
