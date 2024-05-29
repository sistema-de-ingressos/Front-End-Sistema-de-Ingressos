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
import {comprarIngresso, getDetalhesCliente} from "../../services/apiService.js";
import {SuccessModal} from "../SuccessModal/SuccessModal.jsx";
import {useDisclosure} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

export function TicketFormSection({ idEvento }) {
    const navigate = useNavigate()
    const [erro, setErro] = useState();
    const { isOpen: isOpenSuccess, onOpen: onOpenSuccess, onClose: onCloseSuccess } = useDisclosure();

    const [formData, setFormData] = useState({
        nome: null,
        cpf: null,
        dataDeNascimento: null,
        endereco: {
            cep: null,
            logradouro: null,
            bairro: null,
            estado: null,
            cidade: null,
            complemento: null,
            numero: null,
        },
        idEvento: idEvento
    })

    const checkCEP = async (value) => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${value}/json/`);
            const responseData = response.data;
            setFormData(prevFormData => ({
                ...prevFormData,
                endereco: {
                    ...prevFormData.endereco,
                    cep: value,
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

    const checkCPF = async (value) => {
        try {
            const customerData = await getDetalhesCliente(value);
            console.log(customerData)
            if (customerData) {
                setFormData(prevFormData => ({
                    ...prevFormData,
                    nome: customerData.nome,
                    dataDeNascimento: customerData.dataDeNascimento,
                    endereco: {
                        ...prevFormData.endereco,
                        ...customerData.endereco,
                    }
                }));
            }

        } catch (error) {
            console.log(error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "cep") {
            checkCEP(value);
        }
        if (name === "cpf") {
            checkCPF(value);
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
            placeholder: "Digite seu CPF",
            mask: "99999999999",
            size: "md",
            required: true,
        },
        {
            name: "dataDeNascimento",
            label: "Data de nascimento",
            value: formData.dataDeNascimento,
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

    const handleClose = async () => {
        onCloseSuccess()
        navigate("/")
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
            <SuccessModal isOpen={isOpenSuccess} onClose={handleClose} text={"Compra realizada com sucesso!"}/>
        </TicketFormSectionContainer>
    );
}