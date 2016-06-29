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

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@RestController
public class PiggiePostController {

    static final String ROOT = "/Users/mzeng/src/peppa-pig/src/main/resources/static";
    private PiggiePostRepository piggiePostRepository;

    @Autowired
    public PiggiePostController(PiggiePostRepository piggiePostRepository) {
        this.piggiePostRepository = piggiePostRepository;
    }

    @RequestMapping("/getAllPiggiePosts")
    public Iterable<PiggiePost> getAllPiggiePosts() {
        return piggiePostRepository.findAll(new Sort(new Sort.Order(Sort.Direction.DESC, "id")));
    }

    @RequestMapping(path = "/uploadPhoto", method = RequestMethod.POST)
    public void uploadPhoto(@RequestBody Photo photo){
        System.out.println("upload photo");
    }

    @RequestMapping(method = RequestMethod.POST, path = "/uploadFile")
    public void handleFileUpload(@RequestParam(name = "upload_file") List<MultipartFile> files) {
        if (files == null && files.isEmpty())   return ;
        files.stream().forEach( (file) -> {
            if (!files.isEmpty()) {
                try {
                    Files.copy(file.getInputStream(), Paths.get(ROOT, file.getOriginalFilename()),
                            StandardCopyOption.REPLACE_EXISTING);
                    System.out.println("file uploaded");
                } catch (IOException | RuntimeException e) {
                    throw new RuntimeException(e);
                }
            } else {
                System.out.println("file is empty");
            }
        });
    }
}
