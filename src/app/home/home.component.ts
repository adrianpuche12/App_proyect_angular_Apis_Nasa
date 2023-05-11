import { Component, OnInit } from '@angular/core';
type Fruit = Array<{ id: number; name: string }>;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cardContent: Array<any> = [
    { title: "APOD", description: "Astronomy Picture of the Day", url: "/apod-component" },
    { title: "Asteroids NeoWs", description: "Near Earth Object Web Service", url: "/neo-ws-component" },
    { title: "Donki", description: "Space Weather Database Of Notifications, Knowledge, Information", url: "/donki-component" },
    { title: "Earth", description: "Unlock the significant public investment in earth observation data", url: "/earth-component" },
    { title: "Eonet", description: "The Earth Observatory Natural Event Tracker", url: "/eonet-component" },
    { title: "Epic", description: "Earth Polychromatic Imaging Camera", url: "/epic-Component" },
    { title: "Exoplanet", description: "Programmatic access to NASA's Exoplanet Archive database", url: "/exoplanet-component" },
    { title: "GeneLab", description: "Programmatic interface for GeneLab's public data repository website", url: "/genelab-component" },
    { title: "Insight", description: "Mars Weather Service API", url: "/insight-component" },
    { title: "Mars Rover Photos", description: "Image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars", url: "/mars-photos-component" },
    { title: "NASA Image and Video Library", description: "API to access the NASA Image and Video Library site at images.nasa.gov", url: "/librery-component" },
    { title: "TechTransfer", description: "Patents, Software, and Tech Transfer Reports", url: "/techtransfer-component" },
    { title: "Satellite Situation Center", description: "System to cast geocentric spacecraft location information into a framework of (empirical) geophysical regions", url: "/satellite-center-component" },
    { title: "SSD/CNEOS", description: "Solar System Dynamics and Center for Near-Earth Object Studies", url: "/ssd-component" },
    { title: "Techport", description: "API to make NASA technology project data available in a machine-readable format", url: "/techport-component" },
    { title: "TLE API", description: "Two line element data for earth-orbiting objects at a given point in time", url: "/tle-api-component" },
    { title: "Vesta/Moon/Mars Trek WMTS", description: "A Web Map Tile Service for the Vesta, Moon, and Mars Trek imagery projects", url: "/vesta-component" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
