package Back.videos.service;

import Back.videos.repository.videoRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class videoService {

    @Autowired
    public ModelMapper mapper;

    @Autowired
    public videoRepository repository;
}
