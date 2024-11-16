const el = {
  homeContainer: ()=> cy.get('#home-page'),
  mineButton: ()=> cy.get('#models-buttom'),
  buildContainer: ()=> cy.get('#build-page'),
  cartContainer: ()=> cy.get('#cart-page'),
  login: ()=> cy.get('header #login-buttom'),
  userName: ()=> cy.get('#userName'),
  password: ()=> cy.get('#password'),
  loginConfirm: ()=> cy.get('button[type="submit"]'),
  espera: ()=> cy.wait(2000),
  ghostPage: ()=> cy.get('#ghost'),
  speedPage: ()=> cy.get('#speed'),
  cityPage: ()=> cy.get('#city'),
  partImageArray: ()=> cy.get ('.part .part-images'),
  partSelectorArray: ()=> cy.get('.part'),
  partImage: ()=> cy.get('.part-image'),
  addCartButton: ()=> cy.get("#add-cart"),
  buttonParts: {
    next: ()=> cy.get('.next-selector'),
    previous: ()=> cy.get('.prev-selector')
  }
}

describe('testing home page', () => {
  beforeEach(()=> {
    cy.visit('/')
  })
  it('accesing home page', () => {
    el.homeContainer().should('exist')
  })

  it('testing mine button', () => {
    el.mineButton().click()
    el.buildContainer().should('exist') 
  })

  it('testing error login',() =>{
    el.login().click()
    el.userName().type('adfads')
    el.password().type('sfdaddfda')
    el.loginConfirm().click()
    cy.get('.error').should('contain.text', 'Nome do usuario ou senha incorretos.');
  })

  it('testing login button', () => {
    el.login().click()
    el.userName().type('admin')
    el.password().type('admin')
    el.loginConfirm().click()
    el.login().click()
  });
})

describe('testing build page', () =>{
  beforeEach(()=> {
     cy.visit('/build')
   })
   
   it('accesing build page', () => {
     el.buildContainer().should('exist')
   })

   it('testing ghost pages', () =>{
    el.ghostPage().click()
    el.userName().type('admin')
    el.password().type('admin')
    el.loginConfirm().click()
    el.mineButton().click()
    el.ghostPage().click()
   })

   it('testing speed pages', () =>{
    el.speedPage().click()
    el.userName().type('admin')
    el.password().type('admin')
    el.loginConfirm().click()
    el.mineButton().click()
    el.speedPage().click()
  })

 it('testing city pages', () =>{
    el.cityPage().click()
    el.userName().type('admin')
    el.password().type('admin')
    el.loginConfirm().click()
    el.mineButton().click()
    el.cityPage().click()
  })

  it('checking part changing', () => {
    el.cityPage().click()
    el.userName().type('admin')
    el.password().type('admin')
    el.loginConfirm().click()
    el.mineButton().click()
    el.cityPage().click()
    el.partSelectorArray().each(($part, index) => {
      const getImage = () => cy.wrap($part).find('.part-images');
      const nextButton = () => cy.wrap($part).find('.next-selector');
      const previousButton = () => cy.wrap($part).find('.prev-selector');
  
      let initialImageId: string | undefined;
      getImage()
        .invoke('attr', 'image-id')
        .then((id) => {
          initialImageId = id;
        });
  
      nextButton().click();
      getImage()
        .invoke('attr', 'image-id')
        .then((newId) => {
          expect(newId).to.not.equal(initialImageId);
        });
  
      previousButton().click();
      cy.wait(500);
      getImage()
        .invoke('attr', 'image-id')
        .then((returnedId) => {
          expect(returnedId).to.equal(initialImageId);
        });
    });
  });
})

describe('testing cart page', () =>{
  beforeEach(()=> {
    cy.visit('/')
    el.login().click()
    el.userName().type('admin')
    el.password().type('admin')
    el.loginConfirm().click()
    cy.visit('/cart')
   })

   it('accesing cart page', () => {
    el.cartContainer().should('exist')
  })

  it('testing adding new moto in cart', () => {
    cy.visit('/build');
    el.ghostPage().click();  
    el.partSelectorArray().each(($part) => {
      const next = () => cy.wrap($part).find(".next-selector");
      const times = Math.round(Math.random() * 10);
  
      for (let i = 0; i < times; i++) {
        next().click();
      }
    });  

    el.addCartButton().click();
    cy.visit('/cart')
  });
})