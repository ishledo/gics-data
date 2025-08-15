# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Node.js library for parsing, manipulating, and finding GICS (Global Industry Classification Standard) codes based on the MSCI standard. The project is in early development stages.

## Development Commands

Currently no build, test, or lint commands are configured. The package.json contains a placeholder test script that exits with an error.

## Project Structure

This is a minimal project setup with:
- `package.json` - Basic Node.js package configuration
- `gics-data.iml` - IntelliJ IDEA module file

## Architecture Notes

- Main entry point is configured as `index.js` (not yet created)
- No source code structure has been established yet
- No testing framework has been configured
- No build tooling has been set up

## Getting Started

When implementing the GICS data functionality:
1. Create the main `index.js` entry point
2. Set up appropriate directory structure for source code (e.g., `src/` or `lib/`)
3. Configure testing framework and add test scripts to package.json
4. Consider TypeScript for better type safety with GICS classification data
5. Set up build/compilation process if using TypeScript