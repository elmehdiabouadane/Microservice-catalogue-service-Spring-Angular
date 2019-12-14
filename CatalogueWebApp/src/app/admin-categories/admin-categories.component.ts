import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../catalogue.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {

  categories;
  mode = 'list';

  constructor(private catalogueService: CatalogueService) { }

  ngOnInit() {
    this.onGetAllCategories();
  }

  onGetAllCategories() {
    this.catalogueService.getAllCategories()
      .subscribe(data => {
        this.categories = data;
      }, error => {
        console.log(error);
      });
  }

  onDeleteCat(cat) {
    const c = confirm('Êtes vous sûr ?');
    if (!c) { return; }
    this.catalogueService.deleteRessource(cat._links.self.href)
      .subscribe(data => {
        this.mode = 'list';
        this.onGetAllCategories();
      }, error => {
        console.log(error);
      });
  }

  onNewCat() {
    this.mode = 'new-cat';
  }

  onSaveCat(data) {
    const url = this.catalogueService.host + '/categories';
    this.catalogueService.postRessource(url, data)
      .subscribe(data => {
        this.mode = 'list';
        this.onGetAllCategories();
      }, error => {
        console.log(error);
      });
  }

  currentCategorie;

  onEditCat(cat) {
    this.catalogueService.getRessource(cat._links.self.href)
      .subscribe(data => {
        this.currentCategorie = data;
        this.mode = 'edit-cat';
      }, error => {
        console.log(error);
      });
  }

  onUpdateCat(data) {
    // const url = this.catalogueService.host + '/categories';
    this.catalogueService.putRessource(this.currentCategorie._links.self.href, data)
      .subscribe(data => {
        this.mode = 'list';
        this.onGetAllCategories();
      }, error => {
        console.log(error);
      });
  }
}
