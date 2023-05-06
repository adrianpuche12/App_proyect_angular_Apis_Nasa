import { Component, OnInit } from '@angular/core';
type Fruit = Array<{ id: number; name: string }>;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cardContent: Array<any> = [
    { title: "APOD", description: "Astronomy Picture of the Day" },
    { title: "Asteroids NeoWs", description: "Near Earth Object Web Service" },
    { title: "DONKI", description: "Space Weather Database Of Notifications, Knowledge, Information" },
    { title: "Earth", description: "Unlock the significant public investment in earth observation data" },
    { title: "EONET", description: "The Earth Observatory Natural Event Tracker" },
    { title: "EPIC", description: "Earth Polychromatic Imaging Camera" },
    { title: "Exoplanet", description: "Programmatic access to NASA's Exoplanet Archive database" },
    { title: "GeneLab", description: "Programmatic interface for GeneLab's public data repository website" },
    { title: "Insight", description: "Mars Weather Service API" },
    { title: "Mars Rover Photos", description: "Image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars" },
    { title: "NASA Image and Video Library", description: "API to access the NASA Image and Video Library site at images.nasa.gov" },
    { title: "TechTransfer", description: "Patents, Software, and Tech Transfer Reports" },
    { title: "Satellite Situation Center", description: "System to cast geocentric spacecraft location information into a framework of (empirical) geophysical regions" },
    { title: "SSD/CNEOS", description: "Solar System Dynamics and Center for Near-Earth Object Studies" },
    { title: "Techport", description: "API to make NASA technology project data available in a machine-readable format" },
    { title: "TLE API", description: "Two line element data for earth-orbiting objects at a given point in time" },
    { title: "Vesta/Moon/Mars Trek WMTS", description: "A Web Map Tile Service for the Vesta, Moon, and Mars Trek imagery projects" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
