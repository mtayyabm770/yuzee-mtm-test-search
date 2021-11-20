import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  categoryList: Array<{ title: string; link?: string }> = [];
  recentSearchList: Array<{
    search: string;
    image?: string;
    category?: string;
  }> = [];
  peopleSuggestionList: Array<{
    image: string;
    name: string;
    institute: string;
    mutual_friend_count?: number;
    is_verified?: boolean;
  }> = [];
  coursesList: Array<{ logo: string; name: string; institute: string }> = [];
  blogList: Array<{
    image: string;
    title: string;
    writer: string;
    icon: string;
    created: string;
  }> = [];
  blogSlideOpts = {
    slidesPerView: 1.6,
    spaceBetween: 10,
  };

  constructor() {}

  ngOnInit() {
    this.getCategoryList();
    this.getRecentSearchList();
    this.getPeopleSuggestionList();
    this.getCoursesList();
    this.getBlogList();
  }

  getCategoryList() {
    this.categoryList = [
      {
        title: 'People',
      },
      {
        title: 'Courses',
      },
      {
        title: 'Institutions',
      },
      {
        title: 'Scholarship',
      },
      {
        title: 'Companies',
      },
      {
        title: '+ More',
      },
    ];
  }

  getRecentSearchList() {
    this.recentSearchList = [
      {
        search: 'I want to study marketing in England',
      },
      {
        search: 'Institution that offer medical in Malaysia',
      },
      {
        search: 'Danny William',
        image: '/assets/images/william-profile.png',
      },
      {
        search: 'University of Wollongong',
        image: '/assets/images/wollongong-logo.png',
        category: 'Institution',
      },
    ];
  }

  getPeopleSuggestionList() {
    this.peopleSuggestionList = [
      {
        image: '/assets/images/melbourne-logo.png',
        name: 'Rick Novak',
        institute: 'French School of Kuala Lumpur',
        mutual_friend_count: 8,
        is_verified: false,
      },
      {
        image: '/assets/images/melbourne-logo-1.png',
        name: 'Honda Takumi',
        institute: 'French School of Kuala Lumpur',
        is_verified: true,
      },
    ];
  }

  getCoursesList() {
    this.coursesList = [
      {
        logo: '/assets/images/melbourne-institute.png',
        name: 'Bachelor of Computer Science (Hons)',
        institute: 'The University of Melbourne',
      },
      {
        logo: '/assets/images/um-logo.png',
        name: 'Bachelor of Business Administration',
        institute: 'The University of Melbourne',
      },
      {
        logo: '/assets/images/upsi-logo.png',
        name: 'Bachelor of Fine Arts',
        institute: 'The University of Melbourne',
      },
    ];
  }

  getBlogList() {
    this.blogList = [
      {
        image: '/assets/images/blog1.png',
        title: 'Why The Freelance Life May Get Easier',
        writer: 'Monash University',
        icon: '/assets/icon/icons-1.png',
        created: '2020-10-14',
      },
      {
        image: '/assets/images/blog2.png',
        title: 'How Much Do International Students Bring To...',
        writer: 'Yuzee',
        icon: '/assets/icon/news.png',
        created: '2020-10-14',
      },
      {
        image: '/assets/images/blog3.png',
        title: 'NYU Offers Free Jobs For All Medical Students',
        writer: 'Jorge Dashala',
        icon: '/assets/icon/icons-1.png',
        created: '2020-10-14',
      },
    ];
  }
}
