

window.onload = function()
{
    var abc = screen.availWidth;
    if (abc < 768) {
    	document.getElementById('header-top').style.display = 'none';
        document.getElementById('menu-txt-list').style.display = 'none';

    }
    else
    {
        document.getElementById('header-top').style.display = 'block';	
        document.getElementById('menu-txt-list').style.display = 'block';
    }
};




var a = document.getElementById('picture-img');
var b = document.getElementById('content-text-h2');

function getimaget1(){
	a.src = "../image/massage-da-nong_52899887d012446baa068beddb851a44_large.webp";
	b.innerHTML = 'Dịch vụ công nghệ cao';
	b.style.fontSize = "20px";
}

// document.getElementById("dichvucongnghecao").addEventListener('onclick',getimaget1())


function getimaget2(){
    a.src = "../image/white-skin_63fce40852fe49dd853dba629e340bce_large.webp";
    b.innerHTML = 'Thư giãn và làm đẹp';
    b.style.fontSize = "20px";
}

// document.getElementById("thugianvalamdep").addEventListener('onclick',getimaget2())

function getimaget3(){
	a.src = "../image/long-may_dccea2cbec0f49fb8ebfb9049f4215a2_large.webp";
	b.innerHTML = 'Vật lý trị liệu';
	b.style.fontSize = "20px";
}

// document.getElementById("vatlytrilieu").addEventListener('onclick',getimaget3())

  