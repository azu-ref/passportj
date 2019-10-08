const moviesMock = [{"id":"69826b06-27f5-444b-a512-ce8a856d26d2","title":"Silverado","year":2001,"cover":"http://dummyimage.com/229x188.jpg/dddddd/000000","description":"Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.","duration":1893,"contentRating":"NC-17","source":"https://msn.com/morbi/porttitor/lorem/id/ligula/suspendisse/ornare.html","tags":["Action|Adventure|Romance","Thriller","Crime|Drama","Comedy|Crime|Drama|Romance","Animation|Comedy"]},
{"id":"9182ffc5-80af-409d-b5d5-7877b7fa8029","title":"Alive","year":2002,"cover":"http://dummyimage.com/180x205.bmp/5fa2dd/ffffff","description":"Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.","duration":2000,"contentRating":"PG-13","source":"http://prnewswire.com/id.jpg","tags":["Comedy","Comedy"]},
{"id":"5bc2542b-6eeb-432a-b42e-d26c33275ff6","title":"From the Hip","year":2009,"cover":"http://dummyimage.com/199x169.jpg/cc0000/ffffff","description":"Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","duration":1924,"contentRating":"PG-13","source":"http://skyrock.com/sit/amet/diam/in/magna.xml","tags":["Comedy","Comedy|Drama|Romance"]},
{"id":"adb95fe6-d2ea-4dc4-9628-07a8388957a6","title":"Rammbock","year":1990,"cover":"http://dummyimage.com/218x207.jpg/dddddd/000000","description":"Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.","duration":1989,"contentRating":"PG-13","source":"https://google.com/primis.png","tags":["Comedy|Drama|Romance","Adventure|Drama|Western"]},
{"id":"85c8606a-08f5-4cb0-af51-a632369a512d","title":"Harry Potter and the Deathly Hallows: Part 2","year":1988,"cover":"http://dummyimage.com/156x182.jpg/5fa2dd/ffffff","description":"Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.","duration":1974,"contentRating":"PG-13","source":"https://hugedomains.com/est/quam/pharetra.json","tags":["Documentary|Sci-Fi","Horror|Sci-Fi","Action|Crime|Drama|Thriller","Animation|Drama","Documentary"]},
{"id":"09e31e4e-d942-4afc-86de-bd4fd4279f44","title":"Saddest Music in the World, The","year":2011,"cover":"http://dummyimage.com/188x182.png/dddddd/000000","description":"Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.","duration":1965,"contentRating":"G","source":"http://squidoo.com/justo/in/hac/habitasse/platea.xml","tags":["Documentary|Musical","Adventure|Comedy|Drama|Romance","Animation","Drama"]},
{"id":"99a38c50-a29b-4377-94e7-d26c8f31515e","title":"Punch-Drunk Love","year":2005,"cover":"http://dummyimage.com/191x205.png/dddddd/000000","description":"Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.","duration":1902,"contentRating":"NC-17","source":"https://census.gov/lectus.png","tags":["Action|Adventure|Fantasy|Horror"]},
{"id":"b44280c2-bf3f-45f4-9440-305c902b648f","title":"Texasville","year":1997,"cover":"http://dummyimage.com/136x210.bmp/dddddd/000000","description":"Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.","duration":2036,"contentRating":"R","source":"http://xinhuanet.com/nulla/justo.xml","tags":["Drama"]},
{"id":"76e77204-66de-4084-9efe-6f3e98b0d66d","title":"Black","year":1999,"cover":"http://dummyimage.com/203x219.jpg/ff4444/ffffff","description":"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.","duration":1901,"contentRating":"NC-17","source":"https://soup.io/semper.xml","tags":["Drama|Thriller","Adventure|Western","Film-Noir","Crime|Drama","Romance"]},
{"id":"3d80a830-c8d4-4902-9de9-fa79bb2acc83","title":"Sea Hawk, The","year":1962,"cover":"http://dummyimage.com/123x202.bmp/dddddd/000000","description":"Sed ante. Vivamus tortor. Duis mattis egestas metus.","duration":1960,"contentRating":"G","source":"https://ovh.net/risus/semper/porta/volutpat/quam/pede/lobortis.jpg","tags":["Comedy|Drama|Romance"]}]

function filteredMoviesMocks(tag) {
    return moviesMock.filter(movie => movie.tags.includes(tag))
}

class MoviesServiceMock {
    async getMovies() {
        return Promise.resolve(moviesMock)
    }

    async createMovie() {
        return Promise.resolve(moviesMock[0])
    }
}

module.exports = { 
    moviesMock,
    filteredMoviesMocks,
    MoviesServiceMock
}