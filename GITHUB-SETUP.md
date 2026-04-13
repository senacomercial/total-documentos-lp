# 🔑 GUIA: Criar Repositório GitHub para Total Documentos LP

## ⚡ Quick Start (5 minutos)

### Passo 1️⃣ : Gerar Token de Acesso no GitHub

1. **Acesse:** https://github.com/settings/tokens/new
2. **Complete:**
   - **Token name:** `total-documentos-lp-deploy`
   - **Expiration:** 90 dias (ou mais)
   - **Scopes (marque):**
     ```
     ☑ repo (Full control of private repositories)
     ☑ user (Read user profile data)
     ☑ workflow (Update GitHub Action workflows)
     ```
3. **Gere:** Clique "Generate token"
4. **Copie:** O token que aparece na tela (nunca mais será mostrado!)

```
token_aqui_e_um_exemplo_muito_longo_ghp_xyzabc123...
```

---

### Passo 2️⃣ : Executar Script PowerShell

Abra **PowerShell** como **Administrador** e execute:

```powershell
cd d:\ProjetosIA\total-documentos-lp

.\setup-github.ps1 -GitHubUsername "senacomercial" -PersonalAccessToken "seu_token_copiado_aqui"
```

**Exemplo completo:**
```powershell
.\setup-github.ps1 -GitHubUsername "senacomercial" -PersonalAccessToken "ghp_3xQ8p9K2mL5nO7rV4sT6uW9xY2zA5bC8dE"
```

---

### Passo 3️⃣ : Verificar no GitHub

O script vai:
1. ✅ Configurar Git local
2. ✅ Criar repositório `total-documentos-lp` na sua conta
3. ✅ Fazer push de todos os arquivos
4. ✅ Mostrar a URL do repositório

**Resultado esperado:**
```
✅ Sucesso! Repositório criado e atualizado!

📍 Seu repositório está em:
   https://github.com/senacomercial/total-documentos-lp

🚀 Próximo passo: Deploy no Vercel...
```

---

## ❓ Troubleshooting

### "O script não executa"
```powershell
# Execute este comando primeiro:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### "Token inválido"
- Verifique se copiou o token **inteiro** (é bem longo)
- Gere um novo token em: https://github.com/settings/tokens/new
- Certifique-se de que **repo** está marcado

### "Repositório já existe"
O script usa `--force` para sobrescrever. Execute novamente.

---

## 📱 Alternativa: Criar Manualmente (se script falhar)

Se preferir criar manualmente no GitHub:

1. **Acesse:** https://github.com/new
2. **Preencha:**
   - **Repository name:** `total-documentos-lp`
   - **Description:** "Landing page para consultoria PI - Vinicius Tronconi"
   - **Public** ✓
3. **Clique:** "Create repository"
4. **Execute estas linhas no PowerShell:**
   ```powershell
   cd d:\ProjetosIA\total-documentos-lp
   git remote add origin https://github.com/senacomercial/total-documentos-lp.git
   git branch -M main
   git push -u origin main
   ```

---

## 🚀 Próximo Passo: Deploy no Vercel

Após criar o repositório (manual ou automático):

1. **Acesse:** https://vercel.com/new
2. **Autorize** com sua conta GitHub
3. **Selecione:** `total-documentos-lp`
4. **Clique:** "Deploy"

**Seu site estará live em < 1 minuto!** ⚡

---

**Created:** 2026-04-13  
**Status:** ✅ Pronto para deploy
