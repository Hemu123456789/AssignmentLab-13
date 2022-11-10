
import { Routes } from async (params:type): Promise<void> => {
	'@angular/router'
};
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
 import{ Skill } from './components/skill/skill.component';
 import{ ExperianceComponent } from './components/experiance/experiance.component';
 import{ EducationComponent } from './components/education/education.component';
 import{ Portfolio } from './components/portfolio/portfolio.component';
 import{ ContactComponent } from './components/contact/contact.component';
 import{ CallComponent } from './components/call/call.component';
export const routerConfig: Routes = [
{   path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  { path: 'skill',
    component: SkillComponent
  }
  path: 'experiance',
  component: ExperianceComponent
},
path: 'education',
component: EducationComponent
},
path: 'portfolio',
component: PortfolioComponent
},
path: 'contact',
component: ContactComponent
},
path: 'call',
component: CallComponent
},

];