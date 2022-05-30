$(()=>{
    $('.first_calc').click(()=>{       
        const qtdColunas = Number($('input[name=qtdColunas]').val());
        const altColunas = Number($('input[name=altColunas]').val());
        
        const metLinearColuna = Number(qtdColunas * altColunas);
        
        const metLinearTotal = Number(metLinearColuna * qtdColunas);
        const qtdBarras = Number(metLinearTotal / 12); // quantidade de barras na obra
        
        const espacamento = Number($('input[name=espacamento]').val());
        
        const altColunaCentimetros = Number(altColunas * 100); 
        
        const estribosCadaColuna = Number(altColunaCentimetros / espacamento);
        
        
        const altEstribo = Number($('input[name=altura]').val()) * 2;
        const largEstribo = Number($('input[name=largura]').val()) * 2;
        
        const perimetroEstribo = Number(altEstribo + largEstribo + 8) / 100;

        // $('#first_result').html('Será usado '+qtdBarras+' barras com '+estribosCadaColuna+' estribos em cada coluna')    
        $('#first_result').html('Serão usadas '+qtdBarras+' barras na obra ')    

        const metrosEstribos = Number(perimetroEstribo * estribosCadaColuna);

        const acoTotalEstribos = Number(metrosEstribos * qtdColunas).toFixed(1); //casas após a virgula

        $('#second_result').html('Voce ira precisar de '+acoTotalEstribos+' metros de aço nos estribos');

    });
})
