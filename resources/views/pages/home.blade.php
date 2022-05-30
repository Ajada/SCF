@extends('headers.main')

@section('content')

    <div class="container  ">
        <div class="content">

            <input type="text" name="qtdColunas" placeholder="Quantidade de colunas"> x <input type="text" name="altColunas" placeholder="Altura das colunas por metros">

            <input type="text" name="espacamento" value="15" placeholder="Espaçamento de cada estribo">
            
            <br>

            <h2 id="first_result"></h2>

            <input type="text" name="altura" placeholder="Altura do estribo"> x <input type="text" name="largura" placeholder="Largura do estribo">

            <br>

            <h2 id="second_result"></h2>

            {{-- <input class="first_calc" type="button" value="Calcular"> --}}

            <button class="custom-btn first_calc btn-3">
                <span>Calcular</span>
            </button>

        </div>           
    </div>
    
@endsection