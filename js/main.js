document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.nav')
	const burgerIcon = document.querySelector('.burger-btn')
	const navItems = document.querySelectorAll('.nav__item')
	const navBtnVars = document.querySelector('.burger-btn__bars')
	const allSections = document.querySelectorAll('.section')
	const footerYear = document.querySelector('.footer__year')

	function navAdd() {
		nav.classList.toggle('nav--active')

        navBtnVars.classList.remove('black-bars-color')

		handleNavItemsAnimation()
	}

	burgerIcon.addEventListener('click', navAdd)

	navItems.forEach(navItem => navItem.addEventListener('click', () => nav.classList.remove('nav--active')))

	const handleNavItemsAnimation = () => {
		let delayTime = 0

		navItems.forEach(navItem => {
			navItem.classList.toggle('nav-items-animation')
			navItem.style.animationDelay = '.' + delayTime + 's'
			delayTime++
		})
	}

	const handleCurrentYear = () => {
		const year = new Date().getFullYear()
		footerYear.innerText = year
	}

	const handleObserver = () => {
		const currentSection = window.scrollY

		allSections.forEach(section => {
			if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
				navBtnVars.classList.add('black-bars-color')
			} else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
				navBtnVars.classList.remove('black-bars-color')
			}
		})
	}

	handleCurrentYear()
	burgerIcon.addEventListener('click', navAdd)
    window.addEventListener('scroll', handleObserver)
})
