import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.css']
})
export class PortfolioComponent implements OnInit {
  selectedCategory = 'All';
  selectedProject: any = null;

  // 🏷️ Categories
  categories = [
    'All',
    'SEO',
    'Google Ads',
    'Social Media',
    'Email Marketing',
    'Website Design & Development'
  ];

  // 🎯 Projects
  projects = [
    {
      title: 'E-commerce Growth Campaign',
      category: 'SEO',
      image: 'images/project1.jpg',
      description:
        'Boosted online sales by 250% with advanced SEO strategy and ad funneling.',
      details:
        'Through technical SEO, keyword strategy, and landing page optimization, we achieved a 250% growth in organic traffic.'
    },
    {
      title: 'Real Estate Lead Generation',
      category: 'Google Ads',
      image: 'images/project2.jpg',
      description:
        'Generated 500+ verified leads using precision-targeted ad campaigns.',
      details:
        'Using smart audience segmentation and A/B testing on creatives, we reduced cost-per-lead by 45%.'
    },
    {
      title: 'Social Media Branding for a Startup',
      category: 'Social Media',
      image: 'images/project3.jpg',
      description:
        'Grew Instagram followers from 0 to 10K organically in just 4 months.',
      details:
        'We implemented influencer collaborations and content storytelling that built strong engagement.'
    },
    {
      title: 'Email Campaign Optimization',
      category: 'Email Marketing',
      image: 'images/project4.jpg',
      description:
        'Increased open rates by 60% and conversion rates by 25% via segmented campaigns.',
      details:
        'Our strategy included subject-line testing, automation flows, and data-driven audience segmentation.'
    },
    // 🆕 Website Design & Development Project
    {
      title: 'Corporate Website Design & Development',
      category: 'Website Design & Development',
      image: 'images/project5.jpg',
      description:
        'Developed a fast, responsive, and SEO-optimized business website for improved conversions.',
      details:
        'We designed a modern UI/UX with responsive layouts and integrated performance-focused backend features that increased visitor engagement by 180%.'
    }
  ];

  filteredProjects = [...this.projects];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async ngOnInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      const AOS = (await import('aos')).default;
      AOS.init({ duration: 1200, once: true });
    }
  }

  filterCategory(category: string) {
    this.selectedCategory = category;
    this.filteredProjects =
      category === 'All'
        ? this.projects
        : this.projects.filter(p => p.category === category);
  }

  openProject(project: any) {
    this.selectedProject = project;
  }

  closeProject() {
    this.selectedProject = null;
  }
}
