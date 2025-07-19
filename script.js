
	const topButton = document.getElementById("backToTop");
	window.onscroll = () => {
	  topButton.style.display = window.scrollY > 200 ? "block" : "none";
	};
	function topFunction() {
	  window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function toggleMenu() {
	  const nav = document.getElementById("navLinks");
	  nav.classList.toggle("show");
	}

	const countdown = () => {
	  const now = new Date().getTime();
	  const weddingDate = new Date('March 24, 2030 12:00:00').getTime();
	  const distance = weddingDate - now;

	  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	  document.getElementById("days").textContent = days;
	  document.getElementById("hours").textContent = hours;
	  document.getElementById("minutes").textContent = minutes;
	  document.getElementById("seconds").textContent = seconds;

	  if (distance < 0) {
		document.getElementById("days").textContent = "0";
		document.getElementById("hours").textContent = "0";
		document.getElementById("minutes").textContent = "0";
		document.getElementById("seconds").textContent = "0";
	  }
	};
	setInterval(countdown, 1000);

	function openLightbox(src) {
	  document.getElementById('lightbox-img').src = src;
	  document.getElementById('lightbox').style.display = 'flex';
	}

	let slideIndex = 0;
	function moveSlide(direction) {
	  const track = document.getElementById('carouselTrack');
	  const slides = track.children;
	  const totalSlides = slides.length;
	  const slideWidth = slides[0].clientWidth + 20;

	  slideIndex += direction;

	  if (slideIndex < 0) slideIndex = totalSlides - 1;
	  if (slideIndex >= totalSlides) slideIndex = 0;

	  const offset = -slideIndex * slideWidth;
	  track.style.transform = `translateX(${offset}px)`;
	}

	// ✅ FIXED RSVP Submission
	let totalGuests = 0;

	function submitRSVP(event) {
	  event.preventDefault();

	  const name = document.getElementById("name").value.trim();
	  const wish = document.getElementById("wish").value.trim();

	  if (name && wish) {
		const wishBox = document.createElement("div");
		wishBox.style.background = "#fff0f5";
		wishBox.style.padding = "15px";
		wishBox.style.borderRadius = "10px";
		wishBox.style.boxShadow = "0 2px 6px rgba(0,0,0,0.05)";
		wishBox.style.marginBottom = "10px";

		wishBox.innerHTML = `<strong>${name}</strong> <br><em>"${wish}"</em>`;
		document.getElementById("wishesContainer").prepend(wishBox);

		document.getElementById("rsvpForm").reset();
	  }
	}

	function playSong() {
	  const song = document.getElementById("song");
	  const button = document.getElementById("playSongBtn");

	  console.log("Play button clicked");

	  if (song.paused) {
		song.play().then(() => {
		  button.textContent = "PAUSE SONG";
		}).catch(error => {
		  alert("Playback blocked until you interact with the page.");
		  console.warn("Playback failed:", error);
		});
	  } else {
		song.pause();
		button.textContent = "PLAY SONG";
	  }
	}

	const sections = document.querySelectorAll("section, .section");
	const navLinks = document.querySelectorAll(".nav-links a");

	sections.forEach((section) => {
	  const top = window.scrollY;
	  const offset = section.offsetTop - 100;
	  const height = section.offsetHeight;
	  const id = section.getAttribute("id");

	  if (top >= offset && top < offset + height) {
		navLinks.forEach((link) => {
		  link.classList.remove("active");
		  document.querySelector(".nav-links a[href*=" + id + "]").classList.add("active");
		});
	  }
	});
	
	function moveSlide(direction) {
	  const track = document.getElementById('carouselTrack');
	  const slides = track.children;
	  const totalSlides = slides.length;
	  const slideWidth = slides[0].clientWidth + 20;

	  slideIndex += direction;

	  if (slideIndex < 0) slideIndex = totalSlides - 1;
	  if (slideIndex >= totalSlides) slideIndex = 0;

	  const offset = -slideIndex * slideWidth;
	  track.style.transform = `translateX(${offset}px)`;
	}
	// Auto-slide every 3 seconds
	setInterval(() => {
	  moveSlide(1);
	}, 3000);