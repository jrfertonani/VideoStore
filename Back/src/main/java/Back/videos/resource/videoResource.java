package Back.videos.resource;

import Back.videos.service.videoService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/videos")
public class videoResource {

    @Autowired
    public ModelMapper mapper;

    @Autowired
    public videoService service;
}
