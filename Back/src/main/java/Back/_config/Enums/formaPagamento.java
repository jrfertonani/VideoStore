package Back._config.Enums;

import lombok.Getter;

@Getter
public enum formaPagamento {
    // aqui são os enums
    CARTAO(0,"CARTÃO"),
    DINHEIRO(1,"DINHEIRO"),
    PIX(2,"PIX");

    //aqui as instancias
    private final Integer codigo;
    private final String descricao;

    //aqui construtor
    formaPagamento(Integer codigo, String descricao) {
        this.codigo = codigo;
        this.descricao = descricao;
    }

    //aqui um codigo para verificar se existe ou não de enum
    //se existir retorna ele se não retorna uma exceção (não necessario)
    public static formaPagamento toEnum(Integer cod){
        if( cod == null){
            return null;
        }
        for(formaPagamento x : formaPagamento.values()){
            if(cod.equals(x.getCodigo())){
                return x;
            }
        }
        throw new IllegalArgumentException("Forma de pagamento inválida: " + cod);
    }

}
