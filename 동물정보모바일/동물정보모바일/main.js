const petData = [
    { 
      imgUrl: 'images/dog01.jpg', // 이미지 주소
      name: "츄츄", // 동물 이름
      type: "dog"
    },
    { 
      imgUrl: 'images/dog02.jpg',
      name: "도비",
      type: "dog"
    },
    { 
      imgUrl: 'images/dog03.jpg',
      name: "뚜기",
      type: "dog"
    },
    { 
      imgUrl: 'images/dog04.jpg',
      name: "동동이",
      type: "dog"
    },
    { 
      imgUrl: 'images/dog05.jpg',
      name: "럽이",
      type: "dog"
    },
    { 
      imgUrl: 'images/dog06.jpg',
      name: "블리",
      type: "dog"
    },
  ];

  $(function(){
      var html = '';
      for(var i = 0; i < petData.length; i++) {
          console.log (petData[i].name);
          html +=`
            <li>
                <a href='#'>
                <img
                src="${petData[i].imgUrl}"
                alt="${petData[i].name}"
                >
                <div class="caption">
                    <h4>${petData[i].name}</h4>

                </div>
                </a>
            </li>`
      }
      
      $(`.pet-list`).html(html)
    })