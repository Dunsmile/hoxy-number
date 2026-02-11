#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

assert_path_exists() {
  local target="$1"
  if [[ ! -e "${ROOT_DIR}/${target}" ]]; then
    echo "[FAIL] Missing: ${target}"
    exit 1
  fi
  echo "[PASS] Found: ${target}"
}

assert_path_exists "fe"
assert_path_exists "fe/public"
assert_path_exists "fe/public/index.html"
assert_path_exists "fe/public/dunsmile"
assert_path_exists "fe/public/teammate"
assert_path_exists "be"
assert_path_exists "docs/GIT_WORKFLOW.md"
assert_path_exists ".github/workflows/ci.yml"
