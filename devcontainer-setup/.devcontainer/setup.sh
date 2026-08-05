#!/usr/bin/env bash
# Se corre UNA vez, automáticamente, cuando se crea el Codespace
# (o cuando haces "Rebuild Container"). No hace falta correrlo a mano.
set -e

echo ">> Instalando librerías de Python..."
pip install --no-cache-dir numpy pandas matplotlib scikit-learn jupyter

echo ">> Descargando e instalando Quarto CLI..."
cd /tmp
curl -LO https://quarto.org/download/latest/quarto-linux-amd64.deb
sudo dpkg -i quarto-linux-amd64.deb
rm -f quarto-linux-amd64.deb   # nunca lo dejamos en el repo

echo ">> Verificando instalación..."
quarto check

echo ">> Listo. Ya puedes correr: quarto render notebook.qmd"
