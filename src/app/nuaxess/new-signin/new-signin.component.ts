import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { DataService } from 'app/data.service';

@Component({
  selector: 'app-new-signin',
  templateUrl: './new-signin.component.html',
  styleUrls: ['./new-signin.component.scss']
})
export class NewSigninComponent implements OnInit {
  @ViewChild('signInNgForm') signInNgForm: NgForm;

  alert: { type: FuseAlertType; message: string } = {
      type   : 'success',
      message: ''
  };
  signInForm: FormGroup;
  showAlert: boolean = false;

  /**
   * Constructor
   */
  constructor(
      private _activatedRoute: ActivatedRoute,
      private _authService: AuthService,
      private _formBuilder: FormBuilder,
      private _router: Router,
      private _dataService: DataService
  )
  {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void
  {
      // Create the form
      this.signInForm = this._formBuilder.group({
          email     : ['', [Validators.required]],
          password  : ['', Validators.required],
          rememberMe: ['']
      });
      localStorage.removeItem('uid')
      localStorage.removeItem('role')
//     if (localStorage.getItem('uid')!==undefined) {
       //-- Super Admin
//      if (localStorage.getItem('role')=="sadmin") { 
//        location.replace('https://mynuaxess.com/nuaxess/#/sadmin');
//        }
//        if (localStorage.getItem('role')=="user") { 
//          location.replace('https://mynuaxess.com/nuaxess/#/sadmin');
//        }
      //-- PEO Admnn
//      if (localStorage.getItem('role')=="padmin") { 
//          location.replace('https://mynuaxess.com/peo/#/sadmin');
//        }
      //-- Broker and Broker Admin
//      if (localStorage.getItem('role')=="badmin") { 
//        location.replace('https://mynuaxess.com/broker/#/sadmin');
//        }
//      if (localStorage.getItem('role')=="broker") { 
//        location.replace('https://mynuaxess.com/broker/#/sadmin');
//      }
//      //-- Employer Admin
//      if (localStorage.getItem('role')=="eadmin") { 
//          location.replace('https://mynuaxess.com/employer/#/sadmin');
//        }
      //-- Employee (This Module)
//      if (localStorage.getItem('role')=="member") { 
//        location.replace('https://mynuaxess.com/member/#/dashboard');
//        }
//     }


  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Sign in
   */
   signIn(): void
   {
       if ( this.signInForm.invalid )
       {
           return;
       }

       this.signInForm = this._formBuilder.group({
          email     : ['', [Validators.required, Validators.email]],
          password  : ['', Validators.required],
          rememberMe: ['']
      });

       this.signInForm.disable();
       this.showAlert = false;
   }
                      
            setUID(): void {
              localStorage.setItem('uid','999')
              this._router.navigate(['/active-claims'])
          }
          
  postForm() {
  
      // Return if the form is invalid
      if ( this.signInForm.invalid )
      {
          return;
      }

      // Disable the form
      this.signInForm.disable();

      // Hide the alert
      this.showAlert = false;

            this._dataService.postLogin(this.signInForm.value['email'], this.signInForm.value['password']).subscribe((data:any)=>{
              if (data.error_code=="0") {
                console.log(data)
                localStorage.setItem('uid',data.uid)
                localStorage.setItem('role',data.role)
                this.signIn()
                if (data.role=="sadmin") { 
                    this._router.navigateByUrl('/sadmin'); 
                    location.replace('https://mynuaxess.com/nuaxess/#/sadmin');
                  }
                  if (data.role=="padmin") { 
                    location.replace('https://mynuaxess.com/peo/#/sadmin');
                  }
                  
                if (data.role=="badmin") { 
                  location.replace('https://mynuaxess.com/broker/#/sadmin');
                  }
                if (data.role=="broker") { 
                  location.replace('https://mynuaxess.com/broker/#/sadmin');
                  }
                if (data.role=="eadmin") { 
                  location.replace('https://mynuaxess.com/employee/#/sadmin');
                  }
                if (data.role=="employee") { 
                  location.replace('https://mynuaxess.com/member/#/dashboard');
                  }
                if (data.role=="user") { 
                  location.replace('https://mynuaxess.com/nuaxess/#/sadmin');
                  }
              } else {      
                  this.signInForm.enable();
                  this.signInNgForm.resetForm();
                  this.alert = {
                      type   : 'error',
                      message: 'Wrong email or password'
                  };
                  this.showAlert = true;
              }
            });
  }
          
}
