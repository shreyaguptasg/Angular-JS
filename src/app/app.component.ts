import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = "assets/BL_logo_square_jpg.jpg";
  url = "https://www.bridgelabz.com";
  userName: string = "";

  ngOnInit() {
    this.title = "Hello from BridgeLabz";
  }

  onClick($event: MouseEvent) {
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }
}
