package Back.videos.service;

import Back._config.Exeptions.serviceExceptions.ObjectNotFoundException;
import Back.videos.entity.DTO.videoDTO;
import Back.videos.entity.model.Video;
import Back.videos.repository.videoRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Arrays;
import java.util.List;

@Service
public class videoService {

    @Autowired
    public ModelMapper mapper;

    @Autowired
    public videoRepository repository;

    public Video create(videoDTO DTO) {
        return repository.save(
                mapper.map(DTO, Video.class)
        );
    }


    public List<Video> findAll() {
        return repository.findAll();
    }


    public Video findById(Long id) {
        return mapper.map(
            repository.findById(id).orElseThrow(
              () -> new ObjectNotFoundException( "Video not found. ID: " + id)
            ),Video.class);
    }

}
