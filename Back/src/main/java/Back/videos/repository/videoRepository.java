package Back.videos.repository;

import Back._config.Enums.Genres;
import Back.videos.entity.model.Video;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface videoRepository extends JpaRepository<Video, Long> {

    // http://localhost:8080/videos/findByName //params nome: nome ,  value: nome do video
    public List<Video> findByName(String name);

    // http://localhost:8080/videos/findByGenres //params nome: nome ,  value: nome do carro
    public List<Video> findByGenres(Genres genres);
}
