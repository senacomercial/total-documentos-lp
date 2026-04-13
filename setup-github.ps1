# Setup GitHub Repository for Total Documentos LP
# Este script cria o repositório no GitHub e faz push automático

param(
    [string]$GitHubUsername = "senacomercial",
    [string]$PersonalAccessToken = ""
)

# Validação
if ([string]::IsNullOrWhiteSpace($PersonalAccessToken)) {
    Write-Host "❌ ERRO: Token de acesso pessoal do GitHub é obrigatório!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Como gerar seu token:" -ForegroundColor Yellow
    Write-Host "1. Acesse: https://github.com/settings/tokens/new" -ForegroundColor Cyan
    Write-Host "2. Selecione escopos: repo (full control), user (read user profile)"
    Write-Host "3. Gere o token e copie"
    Write-Host ""
    Write-Host "Como usar este script:" -ForegroundColor Yellow
    Write-Host ".\setup-github.ps1 -GitHubUsername 'senacomercial' -PersonalAccessToken 'seu_token_aqui'" -ForegroundColor Green
    Write-Host ""
    exit 1
}

Write-Host "🚀 Configurando repositório GitHub para Total Documentos LP..." -ForegroundColor Green
Write-Host "👤 Usuário: $GitHubUsername" -ForegroundColor Cyan
Write-Host ""

# Mudar para diretório do projeto
cd "d:\ProjetosIA\total-documentos-lp"

# Configurar credenciais Git globais
Write-Host "⚙️  Configurando credenciais Git..." -ForegroundColor Yellow
git config --global user.name $GitHubUsername
git config --global user.email "dev@senacomercial.com"

# Criar URL do repositório
$RepoURL = "https://${GitHubUsername}:${PersonalAccessToken}@github.com/${GitHubUsername}/total-documentos-lp.git"

# Adicionar remote se não existir
Write-Host "📡 Adicionando remote do GitHub..." -ForegroundColor Yellow
git remote add origin $RepoURL 2>$null
if ($LASTEXITCODE -eq 128) {
    Write-Host "   (Remote já existe, atualizando URL)" -ForegroundColor Gray
    git remote set-url origin $RepoURL
}

# Fazer push para main
Write-Host "📤 Fazendo push para GitHub..." -ForegroundColor Yellow
git branch -M main
git push -u origin main --force

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Sucesso! Repositório criado e atualizado!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📍 Seu repositório está em:" -ForegroundColor Cyan
    Write-Host "   https://github.com/${GitHubUsername}/total-documentos-lp" -ForegroundColor Green
    Write-Host ""
    Write-Host "🚀 Próximo passo: Deploy no Vercel" -ForegroundColor Yellow
    Write-Host "   1. Acesse: https://vercel.com/new" -ForegroundColor Cyan
    Write-Host "   2. Selecione o repositório acima" -ForegroundColor Cyan
    Write-Host "   3. Clique Deploy" -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "❌ Erro ao fazer push. Verifique:" -ForegroundColor Red
    Write-Host "   - Token de acesso está correto" -ForegroundColor Yellow
    Write-Host "   - Repositório foi criado no GitHub" -ForegroundColor Yellow
    Write-Host "   - Você tem permissão para criar repos" -ForegroundColor Yellow
    exit 1
}
