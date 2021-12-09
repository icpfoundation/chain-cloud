#!/usr/bin/env bash

cargo build --target wasm32-unknown-unknown --release --package chain_cloud && \
 ic-cdk-optimizer ./target/wasm32-unknown-unknown/release/chain_cloud.wasm -o ./target/wasm32-unknown-unknown/release/chain_cloud.wasm

#  cargo build --target wasm32-unknown-unknown --package chain_cloud --release