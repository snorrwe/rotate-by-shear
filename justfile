_default:
    @just --list

dev:
    deno run dev

init:
    deno install --allow-scripts=npm:@sveltejs/kit@2.15.1

deploy:
    rm -rf build
    deno run deploy
