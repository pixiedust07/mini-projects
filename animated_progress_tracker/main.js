const nextbtn = document.querySelector('#next')
const backbtn = document.querySelector('#back')
const progressBar = document.querySelector('.progress-line')
const circles = document.querySelectorAll('.step')


let currentStep = 1;

const updateProgressBar = () => {
    currentStep++;
    if (currentStep > circles.length) {
        currentStep = circles.length
    }
    updateStep()
}

const resetProgressBar = () => {
    currentStep--;
    if (currentStep < 1) {
        currentStep = 1
    }
    updateStep()
}

const updateStep = () => {
    circles.forEach((step, index) => {
        if (index < currentStep) {
            step.classList.add('active')
        } else {
            step.classList.remove('active')
        }
    })

    const activeSteps = document.querySelectorAll('.active')
    const width = (activeSteps.length - 1) / (circles.length - 1) * 99
    progressBar.style.width = `${width}%`

    if(currentStep === 1) {
        backbtn.disabled = true;
    } else if(currentStep === circles.length) {
        nextbtn.disabled = true;
    } else {
        nextbtn.disabled = false;
        backbtn.disabled = false;
    }
}

nextbtn.addEventListener('click', updateProgressBar)
backbtn.addEventListener('click', resetProgressBar)

circles.forEach((step, index) => {
    const step1 = 'Getting started'
    const step2 = 'Creating Account'
    const step3 = 'Verifying user'
    const step4 = 'All Done'
    switch (index) {
        case 0: {
            step.setAttribute('data-content', `${step1}`)
        } break;
        case 1: {
            step.setAttribute('data-content', `${step2}`)
        } break;
        case 2: {
            step.setAttribute('data-content', `${step3}`)
        } break;
        case 3: {
            step.setAttribute('data-content', `${step4}`)
        } break;
    }
})

