import {
    Campos,
    Erro,
    FinalSection,
    FormSection,
    SecaoDados,
    SubmitButton,
    TicketFormSectionContainer,
    Title
} from "./styles.js";
import {useState} from "react";
import axios from "axios";
import {CustomInput} from "../CustomInput/CustomInput.jsx";
import {comprarIngresso} from "../../services/apiService.js";
import {SuccessModal} from "../SuccessModal/SuccessModal.jsx";
import {useDisclosure} from "@chakra-ui/react";

export function TicketFormSection({ idEvento }) {

    const [formData, setFormData] = useState({
        nome: null,
        cpf: null,
        dataNascimento: null,
        endereco: {
            cep: null,
            logradouro: null,
            bairro: null,
            estado: null,
            cidade: null,
            complemento: null,
            numero: null,
        }
    })
    const [erro, setErro] = useState();
    const { isOpen: isOpenSuccess, onOpen: onOpenSuccess, onClose: onCloseSuccess } = useDisclosure();

    const checkCEP = async (event) => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${event.target.value}/json/`);
            const responseData = response.data;
            setFormData((prevFormData) => ({
                ...prevFormData,
                endereco: {
                    ...prevFormData.endereco,
                    cep: event.target.value,
                    logradouro: responseData.logradouro,
                    bairro: responseData.bairro,
                    estado: responseData.uf,
                    cidade: responseData.localidade,
                }
            }));
        } catch (error) {
            console.log(error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "cep") {
            checkCEP(event);
        }
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const dadosPessoaisInputs = [
        {
            name: "nome",
            label: "Nome",
            value: formData.nome,
            placeholder: "Digite seu nome",
            size: "lg",
            required: true,
        },
        {
            name: "cpf",
            label: "CPF",
            value: formData.cpf,
            placeholder: "XXX.XXX.XXX-XX",
            size: "md",
            mask: "999.999.999-99",
            required: true,
        },
        {
            name: "dataNascimento",
            label: "Data de nascimento",
            value: formData.dataNascimento,
            placeholder: "dd/mm/aaaa",
            size: "sm",
            mask: "99/99/9999",
            required: true,
        }
    ]
    const enderecoInputs = [
        {
            name: "cep",
            label: "CEP",
            value: formData.endereco.cep,
            placeholder: "XXXXX-XXX",
            mask: "99999-999",
            size: "md",
            required: true,
        },
        {
            name: "logradouro",
            label: "Logradouro",
            value: formData.endereco.logradouro,
            placeholder: "Digite seu endereço",
            size: "lg",
            required: true,
        },
        {
            name: "bairro",
            label: "Bairro",
            value: formData.endereco.bairro,
            placeholder: "Digite seu Bairro",
            size: "md",
            required: true,
        },
        {
            name: "cidade",
            label: "Cidade",
            value: formData.endereco.cidade,
            placeholder: "Digite a Cidade",
            size: "md",
            required: true,
        },
        {
            name: "estado",
            label: "Estado",
            value: formData.endereco.estado,
            placeholder: "Digite o Estado",
            size: "sm",
            required: true,
        },
        {
            name: "numero",
            label: "Número",
            value: formData.endereco.numero,
            size: "sm",
        },
        {
            name: "complemento",
            label: "Complemento",
            value: formData.endereco.complemento,
            placeholder: "Ex: Casa, apartamento...",
            size: "md",
        }
    ];

    const handleSubmit = async () => {
        try {
            await comprarIngresso(formData, idEvento);

            onOpenSuccess()
        } catch (error) {
            setErro(error.response.data)
        }
    }

    return (
        <TicketFormSectionContainer>
            <FormSection>
                <SecaoDados>
                    <Title fontSize={"28px"}>Dados do Comprador</Title>
                    <Campos>
                        {dadosPessoaisInputs.map((input, index) =>
                            <CustomInput key={index} onChange={handleInputChange} {...input} />
                        )}
                    </Campos>
                </SecaoDados>
                <SecaoDados>
                    <Title fontSize={"22px"}>Endereço</Title>
                    <Campos>
                        {enderecoInputs.map((input, index) =>
                            <CustomInput key={index} onChange={handleInputChange} {...input} />
                        )}
                    </Campos>
                </SecaoDados>
            </FormSection>
            <FinalSection>
                <Erro>{erro}</Erro>
                <SubmitButton onClick={handleSubmit}>Finalizar Compra</SubmitButton>
            </FinalSection>
            <SuccessModal isOpen={isOpenSuccess} onClose={onCloseSuccess} text={"Compra realizada com sucesso!"}/>
        </TicketFormSectionContainer>
    );
}