import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GetApiDataService } from '../get-api-data.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-program-search',
  templateUrl: './program-search.component.html',
  styleUrls: ['./program-search.component.css']
})
export class ProgramSearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();

  search = new FormControl('', [Validators.minLength(1)]);

  constructor(private getApidataService: GetApiDataService) { }

  ngOnInit(): void {
    this.search.valueChanges.pipe(debounceTime(1300)).subscribe(
      (searchText: string) => {
        if(!(this.search.invalid) && (searchText)){
          this.searchEvent.emit(searchText);
        }
      }
    )
  }

}
