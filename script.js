template = document.getElementById("root")
template.innerHTML = `
<div class="todo" id="todo">
   <div class="header"> WHAT TODO </div>
    <form id="tambah">
        <input type="text" name="isi" id="isi"/>
        <button type="submit" name="submit"> Simpan</button>
    </form>
<ul id="Isi">
</ul>
</div>
    `
var form = document.getElementById('tambah')
var isi = document.getElementById('Isi')
form.addEventListener('submit',tambah)
isi.addEventListener('click',Hapus)
function tambah(e){
        e.preventDefault()
        var li = document.createElement('li')
        // check
        var check = document.createElement('input')
        check.setAttribute('type','checkbox')
        check.setAttribute('id','checkB')
        check.className='checkB'
        li.append(check)
        // isi
        nilai = document.getElementById('isi').value
        content = document.createTextNode(nilai)
        li.appendChild(content)
        // hapus
        ntmDel = document.createElement('span')
        ntmDel.className="Delete"
        ntmDel.setAttribute('id','Delete')
        ntmDel.appendChild(document.createTextNode('x'))
        li.appendChild(ntmDel)
        isi.appendChild(li)
        $(document).ready(function(){
            $("li").css({
                'display':'flex',
                'justify-content':'space-between',
                'width':'90%',
                'padding':'5px',
                'border':'1px solid black'
            })
            $(".Delete").css({
               'cursor':'pointer'
            })
        })
}
function Hapus(e){
    if(e.target.classList.contains('Delete')){
        if(confirm("Apakah Anda Yakin?")){
            var ya = e.target.parentElement;
            isi.removeChild(ya)
        }
    }
    if(e.target.classList.contains('checkB')){
        if(document.getElementById('checkB').checked){
        var ya = e.target.parentElement;
        ya.style.textDecoration='line-through'
        }
        else{
            var ya = e.target.parentElement;
            ya.style.textDecoration='none'
        }
   
    }
}

$(document).ready(function(){
    $('body').css({
       'background-color':'#a52a2a',
       'height':'100vh',
    })
    $('#root').css({
        'height':'100vh',
    })
    $('#todo').css({
        'width':'50%',
        'height':'80vh',
        'background-color':'rgb(77, 62, 62)',
        'margin':'auto',
        'margin-top':'10%',
    })
    $('.header').css({
        'width':'100%',
        'text-align':'center',
        'color':'#f2f2f2',
        'padding':'10px 0',
        'background-color':'#794000',
    })
    $("input[type='text']").css({
        'width':'80%',
        'background-color':'transparent',
        'margin':'5% 5%',
        'padding':'7px',
        'border':'none',
        'outline':'1px solid #a52a2a',
        'text-align':'center',
        'color':'#f2f2f2',
    })
    $("button").css({
        'width':'50%',
        'background-color':'transparent',
        'margin':'0 25%',
        'padding':'5px',
        'cursor':'pointer',
        'color':'#f2f2f2',
    })
    $("ul").css({
        'width':'50%',
        'background-color':'#794000',
        'margin':'5% 25%',
        'padding':'5px',
        'height':'50%',
        'list-style-type':'none',
        'color':'#f2f2f2',
    })
})
