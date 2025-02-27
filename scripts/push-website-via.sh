#!/bin/bash

yarn version --minor && git push && git push --tags
