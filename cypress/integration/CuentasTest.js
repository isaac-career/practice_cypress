describe('Cuentas', function(){
    var a=1;
    it('vamor a checar una igualdad', function(){
        expect(1==2,"ambos deberían ser iguales").to.equal(true);
    })

    it('oposite comparition', function(){
        expect(1==1).to.equal(false);
    })

    it('residous comparition', function(){
        expect(1-1).to.equal(0);
    })
    it('no equal comparition', function(){
        expect(1+1,"aqui se busca que no sea = 2").not.to.equal(2);
    })

    it('false comparition', function(){
        expect(2==1).to.equal(false);
    })

    it('variable exist', function(){
        expect(a).to.exist;
    })

    it('minus 10', function(){
        expect(a).to.be.lessThan(10);
    })

    it('minus 10', function(){
        expect(a).to.be.greaterThan (10);
    })
    
})