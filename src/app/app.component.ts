import {AfterViewInit, Component, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren} from '@angular/core';
import {CreateNewAutocompleteGroup} from "./ng-autocomplete/classes/AutocompleteGroup";
import {SelectedAutocompleteItem} from "./ng-autocomplete/classes/typing";
import {NgAutocompleteComponent} from "./ng-autocomplete/ng-autocomplete.component";
import { GroupNoResult } from './ng-autocomplete/utils/utils';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, AfterViewInit {
    // @ViewChildren(NgAutocompleteComponent) public completers: QueryList<NgAutocompleteComponent>;
    @ViewChild(NgAutocompleteComponent) public completer: NgAutocompleteComponent;

    @ViewChild('placeholderValue') placeholderValue: TemplateRef<any>;
    @ViewChild('dropdownValue') dropdownValue: TemplateRef<any>;
    @ViewChild('noResults') noResults: TemplateRef<any>;

    _removables = [];

    // public group1 = [
    //     CreateNewAutocompleteGroup(
    //         'Search / choose in / from list',
    //         'parent',
    //         [
    //             {
    //                 title: 'Option 1', id: '1', children: [
    //                 {title: 'Option 4', id: '1'},
    //                 {title: 'Option 5', id: '2'},
    //                 {title: 'Option 6', id: '3'},
    //             ]
    //             },
    //             {
    //                 title: 'Option 2', id: '2', children: [
    //                 {title: 'Option 7', id: '1'},
    //                 {title: 'Option 8', id: '2'},
    //                 {title: 'Option 9', id: '3'},
    //             ]
    //             },
    //             {
    //                 title: 'Option 3', id: '3', children: [
    //                 {title: 'Option 10', id: '1'},
    //                 {title: 'Option 11', id: '2'},
    //                 {title: 'Option 12', id: '3'},
    //             ]
    //             },
    //         ],
    //         {titleKey: 'title', childrenKey: 'children'}
    //     ),
    //     CreateNewAutocompleteGroup(
    //         'Search / choose in / from list',
    //         'child',
    //         [
    //             {title: 'Option 4', id: '1'},
    //             {title: 'Option 5', id: '2'},
    //             {title: 'Option 6', id: '3'},
    //             {title: 'Option 7', id: '4'},
    //             {title: 'Option 8', id: '5'},
    //             {title: 'Option 9', id: '6'},
    //         ],
    //         {titleKey: 'title', childrenKey: null},
    //         'parent',
    //     ),
    // ];

    // public group2 = [
    //     CreateNewAutocompleteGroup(
    //         'Search / choose in / from list',
    //         'normal',
    //         [
    //             {title: 'Option 4', id: '1'},
    //             {title: 'Option 5', id: '2'},
    //             {title: 'Option 6', id: '3'},
    //             {title: 'Option 7', id: '4'},
    //             {title: 'Option 8', id: '5'},
    //             {title: 'Option 9', id: '6'},
    //         ],
    //         {titleKey: 'title', childrenKey: null},
    //         ''
    //     ),
    //     CreateNewAutocompleteGroup(
    //         'Search / choose in / from list',
    //         'disabled.',
    //         [
    //             {title: 'Option 4', id: '1'},
    //             {title: 'Option 5', id: '2'},
    //             {title: 'Option 6', id: '3'},
    //             {title: 'Option 7', id: '4'},
    //             {title: 'Option 8', id: '5'},
    //             {title: 'Option 9', id: '6'},
    //         ],
    //         {titleKey: 'title', childrenKey: null},
    //         '',
    //         false
    //     ),
    // ];

    // public group3 = [
    //     CreateNewAutocompleteGroup(
    //         'Search / choose in / from list',
    //         'late',
    //         [],
    //         {titleKey: 'title', childrenKey: null},
    //         ''
    //     )
    // ];

    public groupStress1 = [
        CreateNewAutocompleteGroup(
            'Search / choose in / from list',
            'items1',
            this.FillArray(),
            {titleKey: 'title', childrenKey: null},
            '',
            true,
        )
    ];

    // public group4 = [
    //     CreateNewAutocompleteGroup(
    //         'Search / choose in / from list',
    //         'remove',
    //         [
    //             {title: 'Option 4', id: '1'},
    //             {title: 'Option 5', id: 2},
    //             {title: 'Option 6', id: '3'},
    //             {title: 'Option 7', id: 4},
    //             {title: 'Option 8', id: '5'},
    //             {title: 'Option 9', id: 6},
    //         ],
    //         {titleKey: 'title', childrenKey: null},
    //         ''
    //     )
    // ];

    /**
     *
     * @returns {Array}
     * @constructor
     */
    FillArray() {
        let arr = [];
        for (let i = 0; i < 200; i++) {
            arr.push({title: `Option ${i} Lorem ipsum dolor sit amet, consectetur adipiscing elit.`, id: i});
        }

        return arr;
    }

    /**
     *
     * @param {GroupNoResult} group
     * @constructor
     */
    NoResult(group: GroupNoResult) {
        console.log('NO RESULT', group);
    }

    constructor() {

    }

    ngOnInit() {
        const async = (str: string) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([
                        {
                            id: 0,
                            title: `Test case 1 ${str}`
                        },
                        {
                            id: 1,
                            title: `Test case 2 ${str}`
                        },
                        {
                            id: 2,
                            title: `Test case 3 ${str}`
                        }
                    ])
                }, 2000)
            });
        };

        // this.completer.SetAsync('items1', async);

        this.completer.SetTemplate('items1', 'dropdownValue', this.dropdownValue);
        this.completer.SetTemplate('items1', 'noResults', this.noResults);
        this.completer.SetTemplate('items1', 'placeholderValue', this.placeholderValue);
    }

    /**
     *
     */
    ngAfterViewInit() {
        console.log();
    }

    /**
     *
     * @param item
     * @constructor
     */
    Selected(item: SelectedAutocompleteItem) {
        console.log('its actually saying its selected', item);
    }

    /**
     *
     * @param item
     * @constructor
     */
    RemoveSelected(item: SelectedAutocompleteItem) {
        if(item.item !== null) {
            this._removables.push(item.item);
        }

        this.completer.RemovableValues('items1', this._removables);
    }

    /**
     *
     * @constructor
     */
    SetValues() {
        // const component = NgAutocompleteComponent.FindCompleter('group3', this.completers);

        this.completer.SetValues(
            'late',
            [
                {title: 'Option 4', id: '1'},
                {title: 'Option 5', id: '2'},
                {title: 'Option 6', id: '3'},
                {title: 'Option 7', id: '4'},
                {title: 'Option 8', id: '5'},
                {title: 'Option 9', id: '6'},
            ]
        )
    }
}
