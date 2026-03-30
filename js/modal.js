/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function initModal() {
  const modal = document.getElementById('application-modal');
  const openBtns = document.querySelectorAll('.open-modal');
  const closeBtn = document.getElementById('close-modal');
  const nextToStep2 = document.getElementById('next-to-step-2');
  const successClose = document.getElementById('success-close');
  const form = document.getElementById('application-form');
  
  if (!modal) return;

  const steps = {
    1: document.getElementById('modal-step-1'),
    2: document.getElementById('modal-step-2'),
    3: document.getElementById('modal-step-3')
  };

  function showStep(stepNumber) {
    Object.values(steps).forEach(step => {
      if (step) step.classList.add('hidden');
    });
    if (steps[stepNumber]) steps[stepNumber].classList.remove('hidden');
  }

  function openModal() {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    showStep(1);
  }

  function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  openBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  }));

  closeBtn?.addEventListener('click', closeModal);
  successClose?.addEventListener('click', closeModal);

  // Step 1 -> Step 2
  nextToStep2?.addEventListener('click', () => {
    showStep(2);
  });

  // Step 2 -> Step 3 (Form Submission)
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      // Loading state
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <div class="flex items-center justify-center gap-3">
          <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Processing Protocol...</span>
        </div>
      `;

      try {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        console.log('Protocol Initiated:', data);
        showStep(3);
        form.reset();
      } catch (error) {
        console.error('Submission error:', error);
        alert('An error occurred. Please try again.');
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    });
  }

  // Close on outside click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Escape key support
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}
