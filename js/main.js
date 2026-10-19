/**
 * Umer Farooq Hydrey - Personal Portfolio Website
 * Lead GIS QA Analyst & Geomatics Engineer
 * Vanilla JavaScript (No Frameworks)
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initProjectsFilterAndModal();
  initContactInteractions();
  initSmoothScrollSpy();
  initImageFallbackHandler();
});

/* ==========================================================================
   1. Projects Database (Complete source data from Google Doc)
   ========================================================================== */
const projectsData = [
  {
    id: 'cadastral-qa-plra',
    category: 'cadastral-qa',
    categoryLabel: 'Cadastral QA',
    title: 'Cadastral QA & PLRA Green Property Integration System',
    role: 'Lead GIS QA Analyst',
    organization: 'PLRA / Board of Revenue / World Bank PULSE',
    dates: '2024 – Present',
    image: 'assets/images/cadastral-qa-plra-integration.jpg',
    summary: 'End-to-end cadastral data validation, spatial QA/QC pipelines, and automated database reconciliation for rural and urban land administration, ensuring Board of Revenue and World Bank compliance.',
    bullets: [
      'Executed full cadastral QA workflows utilizing Tatima, Field Books, Aks Shajra, and Naqsha Jem to produce legally validated parcel datasets.',
      'Audited cadastral consolidation baseline data by comparing existing khasra vectors against updated Musaviyan (Massive) and Patwari Latha maps, initiating complete re-digitization when discrepancies occurred.',
      'Verified georeferencing and spatial alignment of mouza khasra plans against drone/satellite imagery, ensuring accurate acre-level ground placement and eliminating topological overlaps or gaps.',
      'Digitized sub-parcel boundaries and tatima splits based on official traverses and field book karam dimensions with strict closure precision.',
      'Developed automated Python & ArcPy QC tools performing multi-tier integrity checks across 19 administrative fields, handling settlement rules (Qila Bandi, Mustateel Bandi, Murraba Bandi).',
      'Automated PLRA tabular data ingestion and joining via composite keys (Mouza_ID + Join_Shp), reconciling digitized parcel geometries against registered ownership records.',
      'Calculated geodesic parcel areas with automatic conversion to standard Square Feet and revenue Kanal-Marla-SqFt (KMF) formats to verify area tolerances against PLRA registries.',
      'Generated automated exception logs and audit reports (.csv), tagging unlinked parcels as "Tatima Required" or "F.B Required" for targeted field review.',
      'Validated and finalized certified spatial layers for direct upload to the Land Information System (LIS) portal, facilitating Green Property certification.'
    ],
    tools: ['Python', 'ArcPy', 'QGIS', 'ArcGIS Pro', 'PostGIS', 'PLRA LIS', 'Field Books', 'Aks Shajra']
  },
  {
    id: 'pulse-drone-photogrammetry',
    category: 'drone-mapping',
    categoryLabel: 'Drone Mapping',
    title: 'World Bank PULSE Project – Multi-District Drone Mapping & Photogrammetry',
    role: 'GIS Manager',
    organization: 'Hafeez Associates / World Bank PULSE',
    dates: 'Feb 2025 – Present',
    image: 'assets/images/pulse-drone-photogrammetry.jpg',
    summary: 'Directing drone surveying and photogrammetric processing across 5 districts (Sargodha, Bhakkar, Mianwali, Kasur, Okara) producing sub-decimeter orthomosaics and DSMs to World Bank standards.',
    bullets: [
      'Led drone-based mapping activities and flight planning for Sargodha, Bhakkar, Mianwali, Kasur, and Okara districts.',
      'Acquired and processed high-resolution UAV imagery to generate ultra-precise orthomosaics and Digital Surface Models (DSMs).',
      'Developed semi-automated workflows in QGIS Model Builder to streamline raster processing and enterprise data preparation.',
      'Utilized specialized QGIS plugins for DSM smoothing, elevation anomaly correction, and raster modification according to PULSE specifications.',
      'Converted massive drone datasets into high-performance ECW format using Global Mapper for rapid multi-tier rendering.',
      'Digitized processed outputs and integrated spatial layers into structured, enterprise geodatabases.'
    ],
    tools: ['Agisoft Metashape', 'QGIS Model Builder', 'Global Mapper (ECW)', 'Drone Surveying', 'DSM/DTM Generation', 'World Bank SOPs']
  },
  {
    id: 'pulse-cadastral-mouza-approval',
    category: 'cadastral-qa',
    categoryLabel: 'Cadastral QA',
    title: 'World Bank PULSE Project – Cadastral Mapping & 268 Mouzas Approval',
    role: 'QA Analyst (Team Leader)',
    organization: 'Power Aim Engineering Services / World Bank PULSE',
    dates: 'Jan 2024 – Jan 2025',
    image: 'assets/images/cadastral-mouza-approval-bahawalnagar.jpg',
    summary: 'Led a dedicated GIS QA team that audited, topologically validated, and successfully achieved official approval for 268 Mouzas in District Bahawalnagar under World Bank PULSE specifications.',
    bullets: [
      'Supervised and mentored a multidisciplinary GIS QA team, ensuring 100% SOP compliance and zero-defect data delivery.',
      'Officially approved 268 Mouzas of Bahawalnagar through multi-stage technical and legal review.',
      'Enforced vector and raster naming standards and folder directory hierarchies compliant with donor SOPs.',
      'Verified grid alignment and georeferencing accuracy against high-resolution base imagery.',
      'Performed rigorous attribute table validation, field cleanup, and topological constraint enforcement.',
      'Conducted line and parcel checks to ensure accurate dimensional cuttings and boundary reconciliations.'
    ],
    tools: ['QGIS', 'ArcGIS', 'Topology Checker', 'Patwari Musavi', 'Spatial Georeferencing', 'Team Leadership']
  },
  {
    id: 'abu-dhabi-habitat-mapping',
    category: 'remote-sensing',
    categoryLabel: 'Remote Sensing',
    title: 'Abu Dhabi Arid Habitat Mapping & Temporal LULC Change Detection',
    role: 'GIS Associate (Remote)',
    organization: 'Abu Dhabi Environmental Authority Project',
    dates: 'Recent',
    image: 'assets/images/abu-dhabi-habitat-mapping.jpg',
    summary: 'Large-scale multi-temporal LULC change detection updating 2019 baseline habitat data against 2025 high-resolution imagery for complex arid and coastal environments.',
    bullets: [
      'Executed large-scale LULC change detection and temporal analysis to seamlessly update 2019 baseline habitat data according to 2025 imagery.',
      'Managed precision digitization and classification of complex arid habitats, including Coastal Sabkha (3100), Sand Sheets (2020/4130), and Disturbed Ground (9600) based on thematic protocol frameworks.',
      'Enforced rigid topological integrity and spatial validation rules to eliminate sliver gaps, self-intersections, and polygon overlaps across massive environmental datasets.',
      'Developed and deployed custom QGIS/ArcPy automation scripts to streamline geometric smoothing using Chaikin/PAEK algorithms while locked to strict extent boundaries.',
      'Maintained rigorous compliance with Minimum Mapping Units (MMU) and linear feature width thresholds (e.g., 20-meter transportation buffers).',
      'Utilized Advanced Field Calculator scripting and database query optimization for fast attribute extraction and geodatabase population.'
    ],
    tools: ['ArcPy', 'QGIS', 'Chaikin/PAEK Algorithms', 'LULC Analysis', 'MMU Compliance', 'Satellite Remote Sensing']
  },
  {
    id: 'fang-holdings-deep-learning',
    category: 'drone-mapping',
    categoryLabel: 'Drone Mapping',
    title: 'Deep Learning Building Footprint Extraction & Drone Photogrammetry',
    role: 'Photogrammetry Analyst (Remote)',
    organization: 'Fang Holdings Limited (Real Estate)',
    dates: 'Recent',
    image: 'assets/images/deep-learning-building-extraction.jpg',
    summary: 'Automated building footprint detection using deep learning (Mask R-CNN / R-Net) alongside drone photogrammetry and legal NOC compliance for housing master plans.',
    bullets: [
      'Managed the end-to-end process of Drone NOC approvals and civil aviation legal compliance for aerial surveys in Lahore.',
      'Executed georeferencing and vector digitization for large-scale housing society master plans, converting legacy paper layouts into GIS-ready formats.',
      'Utilized photogrammetry techniques to analyze terrain structural features and elevation profiles.',
      'Trained and evaluated deep learning models (Mask R-CNN & R-Net) for automated building footprint segmentation from drone imagery.'
    ],
    tools: ['Deep Learning', 'Mask R-CNN', 'Python', 'Agisoft Metashape', 'Drone NOC Approvals', '3D Terrain Analysis']
  },
  {
    id: 'layyah-flood-susceptibility',
    category: 'spatial-analysis',
    categoryLabel: 'Spatial Analysis',
    title: 'Spatio-Temporal Flood Susceptibility & Damage Analysis (District Layyah)',
    role: 'Principal Spatial Analyst',
    organization: 'Applied Geomatics Research',
    dates: 'Selected Research',
    image: 'assets/images/flood-susceptibility-layyah.jpg',
    summary: 'Comprehensive spatio-temporal flood modeling in District Layyah combining multi-sensor Landsat imagery, HEC-RAS/HEC-HMS hydrodynamics, and settlement vulnerability ranking.',
    bullets: [
      'Processed pre- and post-flood multi-temporal Landsat imagery to delineate maximum flood extent and inundation duration.',
      'Classified pre- and post-flood Land Use / Land Cover (LULC) changes to quantify agricultural and infrastructure devastation.',
      'Modeled hydraulic flood hazard zones using HEC-HMS and HEC-RAS river geometry simulations.',
      'Delineated high-risk rural settlements and created vulnerability ranking matrices for emergency disaster mitigation.'
    ],
    tools: ['HEC-RAS', 'HEC-HMS', 'Landsat Imagery', 'QGIS', 'PCA Morphometrics', 'Disaster Risk Reduction']
  },
  {
    id: 'sikandarabad-snowcover-change',
    category: 'remote-sensing',
    categoryLabel: 'Remote Sensing',
    title: '31-Year Cryosphere Snow Cover Change Detection (Sikandarabad, Nagar)',
    role: 'Remote Sensing Specialist',
    organization: 'Glaciological & Climate Research',
    dates: '1992 – 2023 Multi-Decadal Study',
    image: 'assets/images/snowcover-change-sikandarabad.jpg',
    summary: 'Multi-decadal satellite analysis (1992 to 2023) mapping glacial retreat and vanishing snow cover surrounding Rakaposhi Peak in Gilgit-Baltistan using NDSI indexing.',
    bullets: [
      'Computed Normalized Difference Snow Index (NDSI) across 1992, 1998, 2009, 2015, and 2023 Landsat sensor archives.',
      'Identified critical elevation zones where snow cover permanently vanished over the 31-year timeline.',
      'Constructed detailed topographic elevation zone partitions to evaluate altitude-dependent cryospheric melting.',
      'Delivered quantitative spatial statistics illustrating rapid glacial dynamics in high-altitude Karakoram catchments.'
    ],
    tools: ['NDSI', 'Landsat 5/7/8/9', 'ERDAS / QGIS', 'Topographic Modeling', 'Cryosphere Dynamics']
  },
  {
    id: 'gilgit-basin-morphometric-hazard',
    category: 'spatial-analysis',
    categoryLabel: 'Spatial Analysis',
    title: 'Morphometric Landslide & Flood Hazard Assessment (Gilgit Basin)',
    role: 'Geomorphometric Modeler',
    organization: 'Hydrological Modeling Project',
    dates: 'Specialized Assessment',
    image: 'assets/images/landslide-hazard-gilgit-basin.jpg',
    summary: 'Advanced geomorphometric parameterization calculating 14+ basin indices, compound weightage flood hazard mapping, and HYFRAN-PLUS probabilistic modeling.',
    bullets: [
      'Computed complex drainage metrics: Drainage Density, Bifurcation Ratio, Ruggedness Number, Form Factor, and Hydraulic Gradient.',
      'Conducted statistical flood frequency analysis utilizing HYFRAN-PLUS with Gumbel, Lognormal, and Log-Pearson Type 3 distributions.',
      'Implemented meteorological drought risk indices: Percentage Deviation (PD), Percent of Normal Index (PNI), and SPI.',
      'Correlated drainage diversity, lineament density, and relief ratios to construct an integrated landslide susceptibility zoning map.'
    ],
    tools: ['HYFRAN-PLUS', 'DEM Analysis', 'Morphometric Indices', 'SPI & PNI Drought Indices', 'Global Mapper']
  },
  {
    id: 'kunhar-valley-suitability',
    category: 'spatial-analysis',
    categoryLabel: 'Spatial Analysis',
    title: 'Kunhar Basin Hydrology & Hotel Development Site Suitability Modeling',
    role: 'GIS Spatial Analyst',
    organization: 'Applied Spatial Modeling',
    dates: 'Regional Study',
    image: 'assets/images/kunhar-basin-suitability.jpg',
    summary: 'Multi-criteria evaluation (MCE) determining optimal hotel development locations in the Kunhar Valley while evaluating streamflow and runoff hazards.',
    bullets: [
      'Delineated sub-watersheds and stream order hierarchies across the high-relief Kunhar River basin.',
      'Synthesized multi-criteria spatial factors: slope gradient, road buffer proximity, river flood risk zones, and scenic viewsheds.',
      'Modeled runoff estimation using hydrological methods to protect commercial infrastructure against mountain flash floods.',
      'Generated weighted overlay suitability maps identifying high-potential, environmentally safe zones for eco-tourism development.'
    ],
    tools: ['Multi-Criteria Evaluation (MCE)', 'Hydrological Modeling', 'DEM Streamflow Analysis', 'QGIS', 'ArcGIS']
  }
];

/* ==========================================================================
   2. Navigation Bar Logic (Scroll state, Hamburger drawer, Accessibility)
   ========================================================================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky nav background styling on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          navToggle.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        }
      });
    });

    // Close menu on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }
}

/* ==========================================================================
   3. Portfolio Filtering & Modal System
   ========================================================================== */
function initProjectsFilterAndModal() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const modalBackdrop = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalGallery = document.getElementById('modalGallery');
  const modalGalBadge = document.getElementById('modalGalBadge');
  const modalImg = document.getElementById('modalImage');
  const modalImageCaption = document.getElementById('modalImageCaption');
  const modalFullscreenBtn = document.getElementById('modalFullscreenBtn');
  
  // Fullscreen Lightbox elements
  const lightboxOverlay = document.getElementById('imageLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  
  let lastActiveElement = null;
  let currentActiveFigure = null;

  // Filter Buttons Interaction
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCategory = btn.getAttribute('data-filter');

      // Update button active states
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      // Filter cards
      let visibleCount = 0;
      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (targetCategory === 'all' || cardCategory === targetCategory) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      // Update count badge on active button
      const countEl = btn.querySelector('.filter-count');
      if (countEl && targetCategory !== 'all') {
        countEl.textContent = visibleCount;
      }
    });
  });

  // Modal Open Buttons ("View Case Details")
  const detailButtons = document.querySelectorAll('.btn-details');
  detailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project-id');
      const project = projectsData.find(p => p.id === projectId);
      if (project) {
        lastActiveElement = btn;
        openModal(project, 0);
      }
    });
  });

  // Card Direct Gallery Figure Clicks
  document.querySelectorAll('.project-card-gal figure').forEach((fig) => {
    fig.addEventListener('click', (e) => {
      e.stopPropagation();
      const parentGal = fig.closest('.project-card-gal');
      if (!parentGal) return;
      const projectId = parentGal.getAttribute('data-project-id');
      const project = projectsData.find(p => p.id === projectId);
      if (project) {
        const allFigs = Array.from(parentGal.querySelectorAll('figure'));
        const figIndex = allFigs.indexOf(fig);
        lastActiveElement = fig;
        openModal(project, Math.max(0, figIndex));
      }
    });

    fig.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        fig.click();
      }
    });
  });

  // Modal Close Events
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  // Lightbox Close Events
  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener('click', closeLightbox);
  }
  if (lightboxOverlay) {
    lightboxOverlay.addEventListener('click', (e) => {
      if (e.target === lightboxOverlay) {
        closeLightbox();
      }
    });
  }

  // Fullscreen Zoom Button on Modal Image
  if (modalFullscreenBtn) {
    modalFullscreenBtn.addEventListener('click', () => {
      if (modalImg && modalImg.src) {
        const caption = modalImageCaption ? modalImageCaption.textContent : 'Field Map Deliverable';
        openLightbox(modalImg.src, caption);
      }
    });
  }

  // Click on modal image also zooms
  if (modalImg) {
    modalImg.style.cursor = 'zoom-in';
    modalImg.addEventListener('click', () => {
      if (modalImg.src) {
        const caption = modalImageCaption ? modalImageCaption.textContent : 'Field Map Deliverable';
        openLightbox(modalImg.src, caption);
      }
    });
  }

  // Global ESC Key Listener (Lightbox first, then Modal)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (lightboxOverlay && lightboxOverlay.classList.contains('open')) {
        closeLightbox();
      } else if (modalBackdrop && modalBackdrop.classList.contains('open')) {
        closeModal();
      }
    }
  });

  function openLightbox(src, captionText) {
    if (!lightboxOverlay || !lightboxImg) return;
    lightboxImg.src = src;
    if (lightboxCaption) {
      lightboxCaption.textContent = captionText || 'High-Resolution Map View';
    }
    lightboxOverlay.classList.add('open');
    lightboxOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxOverlay) return;
    lightboxOverlay.classList.remove('open');
    lightboxOverlay.setAttribute('aria-hidden', 'true');
    // If modal is still open, keep body overflow hidden
    if (!modalBackdrop || !modalBackdrop.classList.contains('open')) {
      document.body.style.overflow = '';
    }
  }

  function openModal(project, initialFigureIndex = 0) {
    // Populate Modal Metadata Fields
    const modalCategory = document.getElementById('modalCategory');
    const modalTitle = document.getElementById('modalTitle');
    const modalRole = document.getElementById('modalRole');
    const modalOrg = document.getElementById('modalOrg');
    const modalDates = document.getElementById('modalDates');
    const modalSummary = document.getElementById('modalSummary');
    const modalBullets = document.getElementById('modalBullets');
    const modalTools = document.getElementById('modalTools');

    if (modalCategory) {
      modalCategory.textContent = project.categoryLabel;
      modalCategory.className = `project-category-badge ${getCategoryBadgeClass(project.category)}`;
    }
    if (modalTitle) modalTitle.textContent = project.title;
    if (modalRole) modalRole.textContent = project.role;
    if (modalOrg) modalOrg.textContent = project.organization;
    if (modalDates) modalDates.textContent = project.dates;
    if (modalSummary) modalSummary.textContent = project.summary;

    if (modalBullets) {
      modalBullets.innerHTML = '';
      project.bullets.forEach(bullet => {
        const li = document.createElement('li');
        li.textContent = bullet;
        modalBullets.appendChild(li);
      });
    }

    if (modalTools) {
      modalTools.innerHTML = '';
      project.tools.forEach(tool => {
        const span = document.createElement('span');
        span.className = 'tag-pill';
        span.textContent = tool;
        modalTools.appendChild(span);
      });
    }

    // Populate Modal Gallery from the project's card gallery
    if (modalGallery) {
      modalGallery.innerHTML = '';
      const sourceCardGal = document.querySelector(`.project-card-gal[data-project-id="${project.id}"]`);
      if (sourceCardGal) {
        const sourceFigures = sourceCardGal.querySelectorAll('figure');
        if (modalGalBadge) {
          modalGalBadge.textContent = `${sourceFigures.length} Maps`;
        }

        sourceFigures.forEach((srcFig, idx) => {
          const cloneFig = srcFig.cloneNode(true);
          modalGallery.appendChild(cloneFig);

          // Handle selection in modal
          cloneFig.addEventListener('click', () => {
            selectModalFigure(cloneFig);
          });

          cloneFig.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              selectModalFigure(cloneFig);
            }
          });

          if (idx === initialFigureIndex) {
            selectModalFigure(cloneFig);
          }
        });

        // If no figure index matched, select the first
        if (sourceFigures.length > 0 && (!currentActiveFigure || initialFigureIndex >= sourceFigures.length)) {
          const firstFig = modalGallery.querySelector('figure');
          if (firstFig) selectModalFigure(firstFig);
        }
      } else {
        if (modalGalBadge) modalGalBadge.textContent = '0 Maps';
        if (modalImg) {
          modalImg.src = project.image;
          modalImg.alt = project.title;
        }
        if (modalImageCaption) {
          modalImageCaption.textContent = project.title;
        }
      }
    }

    modalBackdrop.classList.add('open');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button for accessibility
    setTimeout(() => {
      if (modalCloseBtn) modalCloseBtn.focus();
    }, 100);
  }

  function selectModalFigure(figElement) {
    if (!figElement) return;
    const allFigs = modalGallery.querySelectorAll('figure');
    allFigs.forEach(f => f.classList.remove('active'));
    figElement.classList.add('active');
    currentActiveFigure = figElement;

    const img = figElement.querySelector('img');
    const cap = figElement.querySelector('figcaption');
    if (img && modalImg) {
      modalImg.src = img.src;
      modalImg.alt = img.alt || 'Map Deliverable';
    }
    if (cap && modalImageCaption) {
      modalImageCaption.textContent = cap.textContent.trim();
    }
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('open');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastActiveElement) {
      lastActiveElement.focus();
    }
  }

  function getCategoryBadgeClass(category) {
    switch (category) {
      case 'cadastral-qa': return 'cadastral';
      case 'drone-mapping': return 'drone';
      case 'spatial-analysis': return 'spatial';
      case 'remote-sensing': return 'remote';
      default: return '';
    }
  }
}

function initContactInteractions() {
  // One-click Copy Email
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'uhydrey@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email copied to clipboard: ' + email);
      }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Email copied to clipboard: ' + email);
      });
    });
  }

  // Interactive Contact Message Form
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('senderName').value.trim();
      const email = document.getElementById('senderEmail').value.trim();
      const subject = document.getElementById('messageSubject').value.trim() || 'GIS Project / Spatial Collaboration Inquiry';
      const message = document.getElementById('messageBody').value.trim();

      if (!name || !email || !message) {
        alert('Please complete all required fields.');
        return;
      }

      // Format mailto link
      const mailtoUrl = `mailto:uhydrey@gmail.com?subject=${encodeURIComponent(subject + ' - ' + name)}&body=${encodeURIComponent("Sender: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;

      // Show immediate feedback
      if (formFeedback) {
        formFeedback.className = 'form-feedback success';
        formFeedback.innerHTML = `<strong>Inquiry Prepared!</strong> Opening your email client to dispatch to <em>uhydrey@gmail.com</em>.`;
      }

      // Launch email client
      window.location.href = mailtoUrl;

      // Reset form after short delay
      setTimeout(() => {
        contactForm.reset();
      }, 1000);
    });
  }
}

function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

/* ==========================================================================
   5. Smooth Scroll Spy (Highlights Nav Link based on visible section)
   ========================================================================== */
function initSmoothScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   6. Image Fallback Handler (Provides clean GIS schematic if images aren't present)
   ========================================================================== */
function initImageFallbackHandler() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('error', () => {
      // Create high-tech SVG GIS schematic placeholder if image file is pending placement
      const title = img.alt || 'GIS Geospatial Layer';
      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="600" height="340" viewBox="0 0 600 340">
          <defs>
            <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#0f172a" />
              <stop offset="100%" stop-color="#1e293b" />
            </linearGradient>
            <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#334155" stroke-width="0.8" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="600" height="340" fill="url(#bg)" />
          <rect width="600" height="340" fill="url(#grid)" />
          <!-- Contour Lines -->
          <path d="M0,180 Q150,120 300,190 T600,150" fill="none" stroke="#0ea5e9" stroke-width="1.5" opacity="0.4"/>
          <path d="M0,220 Q180,160 350,230 T600,190" fill="none" stroke="#10b981" stroke-width="1.5" opacity="0.3"/>
          <path d="M0,140 Q220,90 400,150 T600,110" fill="none" stroke="#0ea5e9" stroke-width="1.2" opacity="0.25"/>
          <!-- Reticle & Coordinates -->
          <circle cx="300" cy="140" r="32" fill="none" stroke="#0ea5e9" stroke-width="1.5" stroke-dasharray="4,4" />
          <line x1="300" y1="95" x2="300" y2="185" stroke="#0ea5e9" stroke-width="1" opacity="0.6"/>
          <line x1="255" y1="140" x2="345" y2="140" stroke="#0ea5e9" stroke-width="1" opacity="0.6"/>
          <!-- Center Text -->
          <text x="300" y="215" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="600" fill="#f8fafc" text-anchor="middle" letter-spacing="1">
            ${escapeXml(title.substring(0, 48))}
          </text>
          <text x="300" y="238" font-family="'JetBrains Mono', monospace" font-size="10" fill="#94a3b8" text-anchor="middle">
            [GEOSPATIAL LAYER • 31.5204° N, 74.3587° E]
          </text>
        </svg>
      `;
      img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    });
  });
}

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, c => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}
