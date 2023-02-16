document.addEventListener('DOMContentLoaded', () => {
    /*
      All audio and images curtosey of archive.org. What a solid website!
    */
    const src = [
        [
            "ToonLand Theme Song", "Mentor Mahesh", "https://sparkly-lily-aab07e.netlify.app/music/Tales%20of%20toonland%20theme%20song.mp3", "https://sparkly-lily-aab07e.netlify.app/Assets/toonland-music-thumbnail.png"
        ],
        [
            "phone song with beats", "Lulu", "https://sparkly-lily-aab07e.netlify.app/music/phone%20song%20with%20beats.mp3",
            "https://sparkly-lily-aab07e.netlify.app/Assets/toonland-music-thumbnail.png"
        ],
        [
            "fifi and nubby with beats", "Fifi & Nubby", "https://sparkly-lily-aab07e.netlify.app/music/fifi%20and%20nubby%20with%20beats.mp3", "https://sparkly-lily-aab07e.netlify.app/Assets/toonland-music-thumbnail.png"
        ],
        [
            "kuma song with beats", "Kuma", "https://ia800801.us.archive.org/27/items/cd_ella-wishes-you-a-swinging-christmas_ella-fitzgerald/disc1/05.%20Ella%20Fitzgerald%20-%20Sleigh%20Ride_sample.mp3", "https://sparkly-lily-aab07e.netlify.app/Assets/toonland-music-thumbnail.png"
        ],
        [
            "nala song with beats", "Nala", "https://sparkly-lily-aab07e.netlify.app/music/nala%20song%20with%20beats.mp3", "https://sparkly-lily-aab07e.netlify.app/Assets/toonland-music-thumbnail.png"
        ]
    ];

    for (x = 0; x < src.length; x++) {
        var s = src[x];
        var number = parseInt(x) + 1;
        var artist = document.createTextNode(number + ": " + s[0]);
        var track_name = document.createTextNode(s[1]);

        var listItem = document.createElement('div');
        var artist_text = document.createElement('p');
        var track_text = document.createElement('p');

        artist_text.appendChild(artist);
        track_text.appendChild(track_name);

        listItem.appendChild(artist_text);
        listItem.appendChild(track_text);

        listItem.classList.add('item');
        listItem.dataset.index = x;

        document.getElementById('list').appendChild(listItem);
    }
    displayTrack(0);

    var listItems = document.querySelectorAll('.item');
    listItems.forEach(el => {
        el.onclick = () => {
            displayTrack(el.dataset.index);
        };
    });

    function displayTrack(x) {
        var active = document.querySelector('.is-active');
        if (active) {
            active.classList.remove('is-active');
        }
        var el = document.getElementById('list').children[x];
        el.classList.add('is-active');
        var s = src[x],
            artist = s[0],
            track = s[1],
            audio = s[2],
            img = s[3],
            number = parseInt(x) + 1;
        document.getElementById('title').innerText = number + ": " + artist;
        document.getElementById('song_title').innerText = track;
        var albumArt = document.getElementById('art');
        albumArt.src = img;
        albumArt.alt = artist + " " + track;
        document.getElementById('audio').src = audio;
    }
})