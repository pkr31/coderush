import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  public data: any;
  public filterSettings: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.filterSettings = { type: 'Menu' };
    this.getValues();
  }
  getValues() {
    const items = 'Items';
    this.http.get(`${environment.apiUrl}/Role`).subscribe(response => {
      this.data = response[items];
    }, error => {
      console.log(error);
    });
  }
}
