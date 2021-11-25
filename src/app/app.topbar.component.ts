import { Component, OnInit } from '@angular/core';
import {AppMainComponent} from './app.main.component';
import { Router } from '@angular/router';
import { LoginService } from './auth/services/login.service';
import { Response } from './auth/interfaces/response';

@Component({
    selector: 'app-topbar',
    template: `
        <div class="topbar clearfix">
            <div class="logo">
                <a href="#">
                    <img src="assets/layout/images/logo-hotel.png">
                </a>
            </div>

			<a href="#">
                <img src="assets/layout/images/logo-text-hotel.svg" class="app-name"/>
            </a>

            <a id="topbar-menu-button" href="#" (click)="app.onTopbarMenuButtonClick($event)">
                <i class="pi pi-bars"></i>
            </a>

            <ul class="topbar-menu fadeInDown" [ngClass]="{'topbar-menu-visible': app.topbarMenuActive}">
                <li #profile class="profile-item" [ngClass]="{'active-topmenuitem':app.activeTopbarItem === profile}">
                    <a href="#" (click)="app.onTopbarItemClick($event,profile)">
                        <div class="profile-image">
                            <img src="assets/layout/images/anonymus.png">
                        </div>
                        <div class="profile-info">
                            <span class="topbar-item-name profile-name"></span>
                            <span class="topbar-item-name profile-role">{{ user.login }}</span>
                        </div>
                    </a>

                    <ul class="fadeInDown">
                        <li role="menuitem">
                            <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                <i class="pi pi-user"></i>
                                <span>Profile</span>
                                <span class="topbar-submenuitem-badge">5</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                <i class="pi pi-lock"></i>
                                <span>Privacy</span>
                                <span class="topbar-submenuitem-badge">2</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                <i class="pi pi-cog"></i>
                                <span>Settings</span>
                            </a>
                        </li>

                        
                        <li onclick="location.href='#/auth/login';" role="menuitem">
                        <a  (click)="this.logout()">
                                <i class="pi pi-sign-out"></i>
                                <span>Salir</span>
                            </a>
                        </li>
                        
                    </ul>
                </li>
                
                
                <li #notifications [ngClass]="{'active-topmenuitem':app.activeTopbarItem === notifications}">
                    <a href="#" (click)="app.onTopbarItemClick($event,notifications)">
                        <i class="topbar-icon pi pi-bell"></i>
                        <span class="topbar-badge">0</span>
                        <span class="topbar-item-name">Notifications</span>
                    </a>
                    <ul class="fadeInDown">
                       
                    <!--Menu desplegable area de notificaciones-->
                    <!-- <li role="menuitem"> 
                            <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                <i class="pi pi-sliders-h"></i>
                                <span>Pending tasks</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                <i class="pi pi-calendar"></i>
                                <span>Meeting today at 3pm</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                <i class="pi pi-download"></i>
                                <span>Download documents</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                <i class="pi pi-ticket"></i>
                                <span>Book flight</span>
                            </a>
                        </li>
                        -->

                        <p style="text-align:center"><span style="color:darkgray;font-weight:bold">En este espacio estan nuestras notificaciones</span></p>
                    
                    </ul>
                </li>
                <li #search class="search-item" [ngClass]="{'active-topmenuitem':app.activeTopbarItem === search}"
                    (click)="app.onTopbarItemClick($event,search)">
                        <span class="p-input-icon-right">
                            <input type="text" pInputText placeholder="Search">
                            <i class="topbar-icon pi pi-search"></i>
                        </span>
                </li>
            </ul>
        </div>
    `
})
export class AppTopbarComponent implements OnInit{


    user: Response = {
        login: '',
        pri_nombre: '',

    };

    constructor(public app: AppMainComponent,
                private router: Router,
                private loginService: LoginService) {}
    ngOnInit(): void {
        this.loginService.getCredentials()
        .subscribe( resp =>{            
            this.user.login = resp.login;
        })
    }

    logout(){
        this.router.navigateByUrl('/');
        this.loginService.logout();
    }

}
