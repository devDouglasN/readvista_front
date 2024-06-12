import { Component, OnInit } from '@angular/core';
import { Credentials } from '../../Model/credentials';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }

  creds: Credentials = {
    email:    '',
    password: ''
  }

  constructor(
    private toast: ToastrService,
    private service: AuthService,
    private router: Router
  ) { }


  email = new FormControl(null, Validators.email);
  password = new FormControl(null, Validators.minLength(3));

  login() {
    if (this.email.valid && this.password.valid) {
      this.creds.email = this.email.value!;
      this.creds.password = this.password.value!;

      this.service.authenticate(this.creds).subscribe(res => {
        const token = JSON.parse(JSON.stringify(res)).token;
        this.service.successfulLogin(token, this.creds.email);
        this.router.navigate(['']);
        this.toast.success("Login realizado com sucesso!", "Login", { timeOut: 7000 });
      }, err => {
        if (err.status === 403) {
          this.toast.error('Acesso expirado ou login incorreto');
          this.router.navigate(['login']);
        } else {
          this.toast.error("Usuário e/ou senha inválidos");
        }
      });
    } else {
      this.toast.error("Por favor, preencha os campos corretamente.");
    }
  }

}
