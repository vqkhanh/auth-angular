import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean = false;
  constructor(
    private router: Router, 
    private activeRoute: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  signIn(credentials: any) {
    this.authService.login(credentials)
      .subscribe((result:any) => { 
        if (result){
          let returnUrl = this.activeRoute.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/']);
        }
        else  
          this.invalidLogin = true; 
      });
  }

}
