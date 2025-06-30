/**
 * Portfolio JavaScript
 * Emmanuel Varghese - Data Scientist & Snowflake Data Engineer
 * Theme toggle and smooth interactions
 */

document.addEventListener('DOMContentLoaded', function () {
    // ===========================
    // Theme Toggle Functionality
    // ===========================
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // Check for saved theme preference or default to dark theme
    const currentTheme = localStorage.getItem('theme') || 'dark';

    // Apply the saved theme
    if (currentTheme === 'light') {
        body.classList.add('light-theme');
        themeIcon.className = 'fas fa-moon';
    }

    // Theme toggle event listener
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-theme');

        // Update icon and save preference
        if (body.classList.contains('light-theme')) {
            themeIcon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'light');
        } else {
            themeIcon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'dark');
        }
    });

    // ===========================
    // Smooth Transitions Setup
    // ===========================
    // Add transition class after page load to prevent flash
    setTimeout(() => {
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';

        // Add transitions to all theme-dependent elements
        const elements = document.querySelectorAll('nav, .hero, .section-title, .experience-item, .project-card, .skill-category, .contact-link, footer');
        elements.forEach(el => {
            el.style.transition = 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease';
        });
    }, 100);

    // ===========================
    // Smooth Scrolling for Navigation
    // ===========================
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===========================
    // Intersection Observer for Animations
    // ===========================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for fade-in animation
    const fadeElements = document.querySelectorAll('.experience-item, .project-card, .skill-category');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ===========================
    // Dynamic Navbar Background
    // ===========================
    const nav = document.querySelector('nav');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Change navbar background opacity based on scroll
        if (scrollTop > 100) {
            nav.style.background = body.classList.contains('light-theme') 
                ? 'rgba(255, 255, 255, 0.98)' 
                : 'rgba(17, 17, 17, 0.98)';
        } else {
            nav.style.background = body.classList.contains('light-theme') 
                ? 'rgba(255, 255, 255, 0.95)' 
                : 'rgba(17, 17, 17, 0.95)';
        }

        lastScrollTop = scrollTop;
    });

    // ===========================
    // Floating Cards Animation Enhancement
    // ===========================
    const floatingCards = document.querySelectorAll('.floating-card');
    
    // Add parallax effect to floating cards
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        floatingCards.forEach((card, index) => {
            const rate = scrolled * -0.1 * (index + 1);
            card.style.transform = `translateY(${rate}px)`;
        });
    });

    // ===========================
    // Project Cards Stagger Animation
    // ===========================
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // ===========================
    // Skill Items Progressive Load
    // ===========================
    const skillItems = document.querySelectorAll('.skill-item');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 50);
            }
        });
    }, observerOptions);

    skillItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        skillObserver.observe(item);
    });

    // ===========================
    // Console Welcome Message
    // ===========================
    console.log(`
    🚀 Welcome to Emmanuel Varghese's Portfolio
    
    Data Scientist & Snowflake Data Engineer
    Startup Mindset | Problem Solver | Innovation Leader
    
    Built with modern web technologies
    Theme: ${currentTheme} mode
    
    Connect with me:
    📧 emmanuelcvarghese@gmail.com
    💼 https://linkedin.com/in/emmanuelvarghese
    🐙 https://github.com/emmanuelcvarghese
    `);

    // ===========================
    // Floating Cards Drag Functionality - Improved
    // ===========================
    function makeDraggable(element) {
        let isDragging = false;
        let dragStarted = false;
        let startX = 0;
        let startY = 0;
        let currentX = 0;
        let currentY = 0;
        let savedX = 0;
        let savedY = 0;
        
        // Drag sensitivity threshold (prevents accidental drags)
        const DRAG_THRESHOLD = 5;
        
        // Add drag handle indicator
        const dragHandle = document.createElement('div');
        dragHandle.innerHTML = '<i class="fas fa-grip-dots-vertical"></i>';
        dragHandle.className = 'drag-handle';
        dragHandle.style.cssText = `
            position: absolute;
            top: 8px;
            right: 8px;
            color: rgba(255, 255, 255, 0.7);
            cursor: grab;
            font-size: 0.9rem;
            padding: 4px;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 4px;
            opacity: 0;
            transition: all 0.2s ease;
            z-index: 10;
            user-select: none;
        `;
        element.appendChild(dragHandle);

        // Restore saved position on load
        const cardId = element.classList.contains('card-1') ? 'card-1' : 'card-2';
        const savedPosition = localStorage.getItem(`floating-card-${cardId}`);
        if (savedPosition) {
            try {
                const position = JSON.parse(savedPosition);
                savedX = position.x || 0;
                savedY = position.y || 0;
                element.style.transform = `translate(${savedX}px, ${savedY}px)`;
            } catch (e) {
                console.warn('Failed to restore card position:', e);
            }
        }

        // Show/hide drag handle
        element.addEventListener('mouseenter', () => {
            if (!isDragging) {
                dragHandle.style.opacity = '1';
                dragHandle.style.transform = 'scale(1.1)';
            }
        });

        element.addEventListener('mouseleave', () => {
            if (!isDragging) {
                dragHandle.style.opacity = '0';
                dragHandle.style.transform = 'scale(1)';
            }
        });

        // Unified pointer event handlers
        function getEventCoords(e) {
            if (e.type.includes('touch')) {
                return {
                    x: e.touches[0]?.clientX || e.changedTouches[0]?.clientX,
                    y: e.touches[0]?.clientY || e.changedTouches[0]?.clientY
                };
            }
            return { x: e.clientX, y: e.clientY };
        }

        function startDrag(e) {
            // Only allow dragging from the card itself or drag handle
            if (!element.contains(e.target)) return;
            
            e.preventDefault();
            e.stopPropagation();
            
            const coords = getEventCoords(e);
            startX = coords.x - savedX;
            startY = coords.y - savedY;
            
            isDragging = true;
            dragStarted = false;
            
            // Add event listeners to document for global mouse/touch tracking
            document.addEventListener('mousemove', handleDrag, { passive: false });
            document.addEventListener('mouseup', endDrag);
            document.addEventListener('touchmove', handleDrag, { passive: false });
            document.addEventListener('touchend', endDrag);
            
            // Visual feedback
            element.style.cursor = 'grabbing';
            dragHandle.style.cursor = 'grabbing';
            dragHandle.style.opacity = '1';
        }

        function handleDrag(e) {
            if (!isDragging) return;
            
            e.preventDefault();
            e.stopPropagation();
            
            const coords = getEventCoords(e);
            const deltaX = coords.x - startX;
            const deltaY = coords.y - startY;
            
            // Check if we've moved enough to start dragging (prevents accidental drags)
            if (!dragStarted) {
                const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                if (distance < DRAG_THRESHOLD) return;
                
                dragStarted = true;
                
                // Apply dragging styles
                element.classList.add('dragging');
                element.style.opacity = '0.9';
                element.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.4)';
                element.style.zIndex = '1000';
                element.style.animation = 'none';
                element.style.transition = 'none';
                
                // Show reset button
                showResetButton();
            }
            
            if (dragStarted) {
                currentX = deltaX;
                currentY = deltaY;
                
                // Use transform for smooth movement
                requestAnimationFrame(() => {
                    element.style.transform = `translate(${currentX}px, ${currentY}px)`;
                });
            }
        }

        function endDrag(e) {
            if (!isDragging) return;
            
            // Remove global event listeners
            document.removeEventListener('mousemove', handleDrag);
            document.removeEventListener('mouseup', endDrag);
            document.removeEventListener('touchmove', handleDrag);
            document.removeEventListener('touchend', endDrag);
            
            isDragging = false;
            
            if (dragStarted) {
                // Save final position
                savedX = currentX;
                savedY = currentY;
                
                const position = { x: savedX, y: savedY };
                localStorage.setItem(`floating-card-${cardId}`, JSON.stringify(position));
                
                // Restore styles
                element.classList.remove('dragging');
                element.style.opacity = '1';
                element.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                element.style.zIndex = '3';
                element.style.transition = 'all 0.3s ease';
                
                // Restore animation after a brief delay
                setTimeout(() => {
                    if (element.classList.contains('card-1')) {
                        element.style.animation = 'float 6s ease-in-out infinite';
                    } else {
                        element.style.animation = 'float 8s ease-in-out infinite reverse';
                    }
                }, 100);
                
                dragStarted = false;
            }
            
            // Reset cursor and handle
            element.style.cursor = 'grab';
            dragHandle.style.cursor = 'grab';
            
            // Hide drag handle if not hovering
            setTimeout(() => {
                if (!element.matches(':hover')) {
                    dragHandle.style.opacity = '0';
                }
            }, 500);
        }

        // Add event listeners
        element.addEventListener('mousedown', startDrag);
        element.addEventListener('touchstart', startDrag, { passive: false });
        
        // Prevent default drag on images and other elements
        element.addEventListener('dragstart', (e) => e.preventDefault());
    }

    // Apply drag functionality to floating cards
    floatingCards.forEach(card => {
        makeDraggable(card);
    });

    // Add reset button for floating cards (improved)
    let resetButton = null;
    
    function showResetButton() {
        if (resetButton) return; // Button already exists
        
        resetButton = document.createElement('button');
        resetButton.innerHTML = '<i class="fas fa-undo-alt"></i> Reset Cards';
        resetButton.className = 'floating-card-reset';
        resetButton.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: linear-gradient(135deg, #4A90E2, #357ABD);
            color: white;
            border: none;
            border-radius: 25px;
            padding: 12px 20px;
            font-size: 0.85rem;
            font-weight: 500;
            cursor: pointer;
            z-index: 1001;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            box-shadow: 0 6px 20px rgba(74, 144, 226, 0.3);
            user-select: none;
        `;
        
        resetButton.addEventListener('click', resetCards);
        resetButton.addEventListener('mouseenter', () => {
            resetButton.style.transform = 'translateY(0px) scale(1.05)';
            resetButton.style.boxShadow = '0 8px 25px rgba(74, 144, 226, 0.4)';
        });
        resetButton.addEventListener('mouseleave', () => {
            resetButton.style.transform = 'translateY(0px) scale(1)';
            resetButton.style.boxShadow = '0 6px 20px rgba(74, 144, 226, 0.3)';
        });
        
        document.body.appendChild(resetButton);
        
        // Animate in
        requestAnimationFrame(() => {
            resetButton.style.opacity = '1';
            resetButton.style.transform = 'translateY(0px)';
        });
        
        // Auto-hide after 10 seconds if not used
        setTimeout(() => {
            if (resetButton && resetButton.parentNode) {
                hideResetButton();
            }
        }, 10000);
    }
    
    function hideResetButton() {
        if (!resetButton) return;
        
        resetButton.style.opacity = '0';
        resetButton.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            if (resetButton && resetButton.parentNode) {
                resetButton.parentNode.removeChild(resetButton);
                resetButton = null;
            }
        }, 300);
    }
    
    function resetCards() {
        floatingCards.forEach(card => {
            // Clear saved positions
            const cardId = card.classList.contains('card-1') ? 'card-1' : 'card-2';
            localStorage.removeItem(`floating-card-${cardId}`);
            
            // Reset transform and styles
            card.style.transform = '';
            card.style.transition = 'all 0.5s ease';
            card.classList.remove('dragging');
            card.style.opacity = '1';
            card.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            card.style.zIndex = '3';
            
            // Re-apply original animation
            setTimeout(() => {
                if (card.classList.contains('card-1')) {
                    card.style.animation = 'float 6s ease-in-out infinite';
                } else {
                    card.style.animation = 'float 8s ease-in-out infinite reverse';
                }
            }, 100);
        });
        
        // Hide reset button
        hideResetButton();
    }
});
