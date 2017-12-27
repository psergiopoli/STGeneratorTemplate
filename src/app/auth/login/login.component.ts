import { AuthenticationService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    loadingSignup = false;
    error = '';
    message = '';

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.clearMessages();
    }

    clearMessages(){
        this.error = '';
        this.message = '';
        this.loading = false;
    }    

    login() {
        this.clearMessages();
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                const token = result.token;
                this.router.navigate(['/admin/manage']);
                localStorage.setItem('currentUser', JSON.stringify({ username: this.model.username, token: token }));
            },
            error => {
                this.error = 'Senha ou Login incorreto(s)';
                this.loading = false;
            }
        );
    }

    signup() {
        this.clearMessages();
        this.loadingSignup = true;
        this.authenticationService.signup(this.model.username, this.model.password)
            .subscribe(result => {
                this.message = 'Cadastro efetuado com sucesso.';
            }
        );
    }
}