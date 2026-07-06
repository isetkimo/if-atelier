const nav = document.querySelector('.nav');
const items = document.querySelectorAll('.reveal');
function onScroll(){
  if(window.scrollY > 40) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
}
window.addEventListener('scroll', onScroll);
onScroll();
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      io.unobserve(entry.target);
    }
  });
},{threshold:.12});
items.forEach(el=>io.observe(el));
