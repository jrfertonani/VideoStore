package Back.videos.resource;

import Back._config.Enums.Genres;
import Back.videos.entity.DTO.videoDTO;
import Back.videos.entity.model.Video;
import Back.videos.service.videoService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/videos")
public class videoResource {

    @Autowired
    public ModelMapper mapper;

    @Autowired
    public videoService service;


    @PostMapping
    public ResponseEntity<videoDTO> create(@RequestBody videoDTO DTO){
        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(
                        service.create(DTO)
                ).toUri();
        return ResponseEntity.created(uri).body(DTO);
    }

    @GetMapping
    public ResponseEntity<List<Video>> findAll(){
        return ResponseEntity.ok().body(
                service.findAll()
                        .stream().map(x -> mapper.map(
                                x,Video.class)
                                ).toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<videoDTO> findById(@PathVariable Long id){
        return ResponseEntity.ok().body(
                mapper.map(service.findById(id), videoDTO.class)
        );
    }
    @PutMapping("/{id}")
    public ResponseEntity<videoDTO> update(@PathVariable Long idVideo,
                                           @RequestBody videoDTO DTO){
        DTO.setIdVideo(idVideo);
       Video obj = service.update(idVideo, DTO);
       return ResponseEntity.ok().body(DTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }


    @GetMapping("findByName")
    public ResponseEntity<List<Video>> findByName(@RequestParam String name){
        return ResponseEntity.ok().body(
                service.findByName(name)
                        .stream().map(x -> mapper.map(x, Video.class))
                        .toList()
        );
    }

    @GetMapping("findByGenres")
    public ResponseEntity<List<Video>> findByGenres(@RequestParam Genres genres){
        return ResponseEntity.ok().body(
                service.findByGenres(genres)
                        .stream().map(x -> mapper.map(x, Video.class))
                        .toList()
        );
    }

}
