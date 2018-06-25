import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
// Seo
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { utf8Encode } from '@angular/compiler/src/util';

@Component({
  selector: 'app-bredcrumbs',
  templateUrl: './bredcrumbs.component.html',
  styles: []
})
export class BredcrumbsComponent implements OnInit {
  public pageActive: string;
  constructor(private router: Router, private title: Title, private meta: Meta) {
    this.getDataRoute().subscribe(data => {
      console.log(data);
      this.pageActive = data.title;
      this.title.setTitle(data.title);

      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.pageActive
      };

      this.meta.updateTag(metaTag);
    });
  }

  ngOnInit() {}

  /**
   * getDataRoute
   */
  public getDataRoute() {
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}
