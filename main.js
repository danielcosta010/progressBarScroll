window.onscroll = () => progressContainerBar()


const progressContainerBar = () => {
  const progressBar = document.querySelector('[data-progressBar]') 
    bodyScroll = document.body.scrollTop,
    elementScroll = document.documentElement.scrollTop,
    heightScroll = document.documentElement.scrollHeight,
    heightClient = document.documentElement.clientHeight,
    sScroll = bodyScroll|| elementScroll,
    height = heightScroll - heightClient,
    scrolled = (sScroll / height) * 100,
  progressBar.style.width = `${scrolled}%`;
}