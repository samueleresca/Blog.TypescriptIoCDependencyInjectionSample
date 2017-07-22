import { MusicCatalogService } from '../src/Services/MusicCatalogService';
import { IMusicRepository } from '../src/Repositories/IMusicRepository';
import { Track } from '../src/Models/Track';



describe('MusicCatalogService tests', () => {

  let sut: MusicCatalogService;
  let mockRepo: Track[] = new Array(
      new Track(1, "Mock Title 1", "The Mockers", 0),
      new Track(2, "Mock Title 2", "The Mockers 2", 0)
  );

  it('Should return Tracks value', () => {
    //Arrange
    const Mock = jest.fn<IMusicRepository>(() => ({
      get: jest.fn().mockReturnValue(mockRepo)
    }));
    const mock = new Mock();
    sut = new MusicCatalogService(mock);

    //Act
    var result = sut.get();

    //Assert
    expect(mock.get).toHaveBeenCalled();
    expect(result.length).toBe(2);
  });


  it('Should return Tracks by id', () => {
    //Arrange
    const Mock = jest.fn<IMusicRepository>(() => ({
      getById: jest.fn().mockReturnValue(mockRepo[0])
    }));
    const mock = new Mock();
    sut = new MusicCatalogService(mock);

    //Act
    var result = sut.getById(1);

    //Assert
    expect(mock.getById).toHaveBeenCalled();
    expect(result.Id).toBe(1);
    expect(result.Title).toBe("Mock Title 1");
    
  });

  it('Should add Track', () => {
    //Arrange
    const Mock = jest.fn<IMusicRepository>(() => ({
      add: jest.fn().mockImplementation(
          (track : Track)=>{
              return mockRepo.push(track);
          }
        )
    }));
    const mock = new Mock();
    sut = new MusicCatalogService(mock);

    //Act
    var result = sut.add(new Track(3,"Track Test", "Track test",0));

    //Assert
    expect(mock.add).toHaveBeenCalled();
    expect(result).toBe(3);
    
  });
 
  it('Should edit Track', () => {
    //Arrange
    const Mock = jest.fn<IMusicRepository>(() => ({
      edit: jest.fn().mockImplementation(
          (id: number, track : Track)=>{
              return track;
          }
        )
    }));
    const mock = new Mock();
    sut = new MusicCatalogService(mock);

    //Act
    var result = sut.edit(1, new Track(1,"Track Test", "Track test",0));

    //Assert
    expect(mock.edit).toHaveBeenCalled();
    expect(result.Title).toBe("Track Test");
    
  });

   it('Should delete Track', () => {
    //Arrange
    const Mock = jest.fn<IMusicRepository>(() => ({
      delete: jest.fn().mockImplementation(
          (id: number)=>{
            var targetIndex = mockRepo.findIndex((track => track.Id == id));
            return mockRepo.splice(targetIndex, 1)[0];
          }
        )
    }));
    const mock = new Mock();
    sut = new MusicCatalogService(mock);

    //Act
    var result = sut.delete(1);

    //Assert
    expect(mock.delete).toHaveBeenCalled();
    expect(result.Title).toBe("Mock Title 1");
    
  });

});
