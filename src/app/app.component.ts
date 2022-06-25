import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface ISalesTaxArray {
  id: number;
  title: string;
  value: number;
}

interface IItems {
  id: number;
  name: string;
  items: [{
    id: number;
    name: string;
    price: number | null;
    amount: number;
    salesTax: ISalesTaxArray;
  }]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    
    if(this.localItems.length === 0) {
      this.addCategory()
    }
  }

  itemsTitles = [
    'Category',
    'Item name',
    'Price, $',
    'Amount',
    'Sales tax, %',
    'Total, $'
  ]

  localItems: IItems[] = []

  localItemsFiltred: IItems[] = []

  salesTaxArray: ISalesTaxArray[] = [
    {id: 1, title: 'No tax', value: 0}, 
    {id: 2, title: 'RU', value: 13},
  ]

  notFound = false 

  get total(): number {
    let countTotal: number = 0;
    this.localItems.forEach(item => {
      item.items.forEach(items => {
        if(items.price !== null) {
          const countTotalForItem: number = items.price * items.amount + (items.price * items.amount * items.salesTax.value / 100)
          countTotal += countTotalForItem
        }
      })
    })
    return countTotal;
  }

  get itemsArray(): IItems[] {
    if(this.localItemsFiltred.length === 0) {
      return this.localItems
    } else {
      return this.localItemsFiltred
    }
  }

  submitForm(myForm: NgForm) {
    console.log(myForm)
  }

  searchByCategory(category: string) {
    const filtredArray = this.localItems.filter(item => {
      if(item.name.toLocaleLowerCase().includes(category.toLocaleLowerCase())) {
        return item
      } else {
        return null
      }
    })
    console.log(filtredArray)
    if (filtredArray.length === 0 && category !== '') {
      this.notFound = true
    } else if (category === '') {
      this.localItemsFiltred = []
      this.notFound = false
    } else {
      this.localItemsFiltred = [...filtredArray]
      this.notFound = false
    }
  }

  addCategory() {
    this.localItems.push({
      id: new Date().getTime(),
      name: '',
      items: [
        {
          id: new Date().getTime(),
          name: '',
          price: null,
          amount: 1,
          salesTax: {id: 0, title: '', value: 0},
        },
      ]
    },)
  }

  removeCategory(id: number) {
    const index = this.localItems.findIndex((item) => item.id === id)
    this.localItems.splice(index, 1)
  }

  addItemToCategory(id: number) {
    this.localItems.find(item => {
      if(item.id === id) {
        item.items.push({
          id: new Date().getTime(),
          name: '',
          price: null,
          amount: 1,
          salesTax: {id: 0, title: '', value: 0},
        })
      }
    })
  }

  removeItemFromItems(idCategory: number, idItems: number) {
    this.localItems.find(item => {
      if(item.id === idCategory) {
        const idx = item['items'].findIndex(item => item.id === idItems)
        if(idx !== -1) {
          item['items'].splice(idx, 1)
        }
      }
    })
  }


}
